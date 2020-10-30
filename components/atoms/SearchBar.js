import React from "react";
import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
import styles from './SearchBar.module.css'

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
};

export default function SearchBar({ search, setSearch, placeholder, handleSearch, tags, tag, setTag, ...props }) {
  return (
    <form className={styles.searchBar} {...props}>
      <div className={styles.searchBar__selectContainer}>
        <select value={tag} onChange={(event) => setTag(event.target.value)} className={styles.searchBar__select}>
          <option value="" key="default">Category</option>
          {tags.map((t, index) => (
            <option value={t.id} key={index}>{t.tag}</option>
          ))}
        </select>
      </div>

      <div className={styles.searchBar__separator}/>

      <input
        type='text'
        className={styles.searchBar__input}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleSearch(event)
            event.preventDefault()
          }
        }}
        value={search}
        placeholder={placeholder}
      />

      <div className={styles.searchBar__btnContainer}>
        <Button type="primary" focus="primary" onClick={handleSearch}>
          Rechercher
        </Button>
      </div>
    </form>
  );
}
