import React from 'react';

import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  render() {
    return (
      <>
        {this.props.query && <h2>Current query {this.props.query}</h2>}
        <ul className={styles.ImageGallery}>
          {this.props.images.map(img => (
            <li key={img.id} className={styles.ImageGalleryItem}>
              <img
                src={img.webformatURL}
                alt={img.tags}
                className={styles['ImageGalleryItem-image']}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
