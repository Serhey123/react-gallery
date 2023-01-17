import React, { Component } from 'react';

import { ColorRing } from 'react-loader-spinner';
import LoadBtn from '../LoadBtn/LoadBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const KEY = '31608339-0446588eb00af9daeb22c7801';

class GalleryRender extends Component {
  state = {
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.totalHits >= 12) {
            this.setState({ status: 'resolved' });
          }
          if (res.totalHits < 12 || res.hits.length < 12) {
            this.setState({ status: 'idle' });
          }
          if (res.totalHits === 0) {
            this.setState({ status: 'not found' });
          }
          this.props.onFetch(res);
        });
    }
  }

  render() {
    if (this.state.status === 'resolved') {
      return <LoadBtn btnHandler={this.props.onClick} />;
    }
    if (this.state.status === 'pending') {
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
    if (this.state.status === 'not found') {
      return <ErrorMessage />;
    }
  }
}

export default GalleryRender;
