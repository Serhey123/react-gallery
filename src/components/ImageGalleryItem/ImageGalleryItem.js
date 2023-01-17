import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem(props) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={props.img.webformatURL}
        alt={props.img.tags}
        className={styles['ImageGalleryItem-image']}
        data-url={props.img.largeImageURL}
        onClick={props.openModal}
      />
    </li>
  );
}
