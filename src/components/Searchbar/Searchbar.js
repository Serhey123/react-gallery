import React, { useState } from 'react';
import styles from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.Searchbar}>
      <h1>Gallery</h1>
      <form className={styles.SearchForm} onSubmit={submitHandler}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['SearchForm-input']}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
        />
      </form>
    </header>
  );
}

export default Searchbar;
