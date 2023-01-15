import styles from './LoadBtn.module.css';

export default function LoadBtn(props) {
  return (
    <button type="button" onClick={props.btnHandler} className={styles.Button}>
      Load more
    </button>
  );
}
