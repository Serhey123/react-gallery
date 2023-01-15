import React from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    query: '',
  };

  inputHandler = e => {
    this.setState({ query: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputHandler}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
