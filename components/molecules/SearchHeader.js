import PropTypes from 'prop-types';
import SearchBar from '@components/atoms/SearchBar';
import styles from "./SearchHeader.module.css";
import React from "react";

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired
}

export default function SearchHeader({
  title,
  search,
  setSearch,
  placeholder,
  handleSearch,
  tags,
  tag,
  setTag
}) {
  return (
    <>
      <h1 className={styles.searchHeader__title}>
        {title}
      </h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={placeholder}
        handleSearch={handleSearch}
        tags={tags}
        tag={tag}
        setTag={setTag}
        style={{ marginTop: 64 }}
      />
    </>
  );
}