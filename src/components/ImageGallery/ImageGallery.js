import React from 'react';

import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page
    ) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=31608339-0446588eb00af9daeb22c7801&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState(prevState => ({
            images: prevState.images
              ? [...prevState.images, ...res.hits]
              : [...res.hits],
          }));
        });
    }
  }

  render() {
    return (
      <>
        {this.props.query && <h2>current query {this.props.query}</h2>}
        <ul className={styles.ImageGallery}>
          {this.state.images &&
            this.state.images.map(img => (
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
