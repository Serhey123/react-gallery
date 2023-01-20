import React, { Component, useState, useEffect } from 'react';

import { ColorRing } from 'react-loader-spinner';
import LoadBtn from '../LoadBtn/LoadBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const KEY = '31608339-0446588eb00af9daeb22c7801';

function GalleryRender({ onClick, onFetch, query, images, page }) {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.totalHits >= 12) {
          setStatus('resolved');
        }
        if (res.totalHits < 12 || res.hits.length < 12) {
          setStatus('idle');
        }
        if (res.totalHits === 0) {
          setStatus('not found');
        }
        onFetch(res);
      });
  }, [query, page]);

  if (status === 'resolved') {
    return <LoadBtn btnHandler={onClick} />;
  }
  if (status === 'pending') {
    return (
      <ColorRing
        visible={true}
        height="60"
        width="60"
        ariaLabel="blocks-loading"
        wrapperStyle={{ display: 'block', margin: '0 auto' }}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    );
  }
  if (status === 'not found') {
    return <ErrorMessage />;
  }
}

export default GalleryRender;
