import { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleBtnClose);
  }

  handleBtnClose = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBtnClose);
  }

  handleClickClose = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleClickClose}>
        <div>
          <img
            src={this.props.largeImageUrl}
            className={styles.Modal}
            alt={this.props.tags}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
