import PropTypes from 'prop-types'
import SearchBar from '@components/atoms/SearchBar'
import styles from './SearchHeader.module.css'
import React from 'react'

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  tagId: PropTypes.string.isRequired,
  setTagId: PropTypes.func.isRequired,
}

export default function SearchHeader({
  title,
  search,
  setSearch,
  placeholder,
  handleSearch,
  tags,
  tagId,
  setTagId,
}) {
  return (
    <>
      <h1 className={styles.searchHeader__title}>{title}</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={placeholder}
        handleSearch={handleSearch}
        tags={tags}
        tagId={tagId}
        setTagId={setTagId}
        style={{ marginTop: 64 }}
      />
    </>
  )
}
