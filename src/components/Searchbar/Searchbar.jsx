import css from './Searchbar.module.css';
import React from 'react'

const Searchbar = ({ handleInputChange }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}
        
      >
        <button type="submit" className={css.searchForm_button}>
          <span className={css.searchForm_button_label}></span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onSubmit={handleInputChange}
        />
      </form>
    </header>
  )
};

export { Searchbar };
