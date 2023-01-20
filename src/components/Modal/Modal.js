import { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ toggleModal, largeImageUrl, tags }) {
  const handleBtnClose = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    document.documentElement.classList.add(styles.hidden);
    window.addEventListener('keydown', handleBtnClose);
    return () => {
      document.documentElement.classList.remove(styles.hidden);
      window.removeEventListener('keydown', handleBtnClose);
    };
  }, []);

  const handleClickClose = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  return (
    <div className={styles.Overlay} onClick={handleClickClose}>
      <div>
        <img src={largeImageUrl} className={styles.Modal} alt={tags} />
      </div>
    </div>
  );
}

export default Modal;
