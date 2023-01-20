import React, { useState } from 'react';

import styles from './ImageGallery.module.css';

import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, query }) {
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState(null);

  const openModal = e => {
    setShow(!show);
    setTags(e.currentTarget.alt);
    setLargeImageUrl(e.currentTarget.dataset.url);
  };

  return (
    <>
      {images.length > 0 && (
        <p className={styles.title}>Results for: "{query}"</p>
      )}
      <ul className={styles.ImageGallery}>
        {images.map(img => (
          <ImageGalleryItem key={img.id} img={img} openModal={openModal} />
        ))}
      </ul>
      {show && (
        <Modal
          toggleModal={() => setShow(!show)}
          largeImageUrl={largeImageUrl}
          tags={tags}
        />
      )}
    </>
  );
}

export default ImageGallery;
