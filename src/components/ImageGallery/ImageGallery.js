import React from 'react';

import styles from './ImageGallery.module.css';

import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  state = {
    show: false,
    tags: '',
    largeImageUrl: null,
  };

  openModal = e => {
    this.setState({
      show: !this.state.show,
      tags: e.currentTarget.alt,
      largeImageUrl: e.currentTarget.dataset.url,
    });
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        {this.props.images.length > 0 && (
          <p className={styles.title}>Results for: "{this.props.query}"</p>
        )}
        <ul className={styles.ImageGallery}>
          {this.props.images.map(img => (
            <ImageGalleryItem
              key={img.id}
              img={img}
              openModal={this.openModal}
            />
          ))}
        </ul>
        {this.state.show && (
          <Modal
            toggleModal={this.toggleModal}
            largeImageUrl={this.state.largeImageUrl}
            tags={this.state.tags}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
