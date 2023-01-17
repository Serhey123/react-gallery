import styles from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return <p className={styles.message}>No results for your query :(</p>;
}
