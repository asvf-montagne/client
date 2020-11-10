import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import styles from './SearchBar.module.css';
import useWindowSize from '@hooks/useWindowSize';

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  tagId: PropTypes.string.isRequired,
  setTagId: PropTypes.func.isRequired,
};

export default function SearchBar({
  search,
  setSearch,
  placeholder,
  handleSearch,
  tags,
  tagId,
  setTagId,
  ...props
}) {
  const { width: size } = useWindowSize();

  return (
    <form className={styles.searchBar} {...props}>
      <div className={styles.searchBar__selectContainer}>
        <select
          value={tagId}
          onChange={(event) => setTagId(event.target.value)}
          className={styles.searchBar__select}
        >
          <option value="ALL" key="default">
            Toutes les catégories
          </option>
          {tags.map((t, index) => (
            <option value={t.id} key={index}>
              {t.tag}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.searchBar__separator} />

      <input
        type="text"
        className={styles.searchBar__input}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleSearch(event);
            event.preventDefault();
          }
        }}
        value={search}
        placeholder={placeholder}
      />

      <div className={styles.searchBar__btnContainer}>
        <Button
          variant="primary"
          size="medium"
          focus="primary"
          onClick={handleSearch}
        >
          {size > 768 ? 'Rechercher' : <Icon>search</Icon>}
        </Button>
      </div>
    </form>
  );
}
