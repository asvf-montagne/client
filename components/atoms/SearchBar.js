import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
import styles from './SearchBar.module.css'

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default function SearchBar({ search, setSearch, placeholder, handleSearch, categories, category, setCategory, ...props }) {
  console.log(categories)
  return (
    <form className={styles.searchBar} {...props}>
      <div className={styles.searchBar__selectContainer}>
        <select name="categories" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((category, index) => (
            <option value={category.value} key={index}>{category.label}</option>
          ))}
        </select>
      </div>

      <div className={styles.searchBar__separator} />

      <input
        type='text'
        className={styles.searchBar__input}
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        placeholder={placeholder}
      />

      <div className={styles.searchBar__btnContainer}>
        <Button type="primary" onClick={handleSearch}>
          Rechercher
        </Button>
      </div>
    </form>
  );
}