import PropTypes from 'prop-types'
import React from 'react'
import styles from './PageHeader.module.css'

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

export default function PageHeader({ title, subTitle }) {
  return (
    <>
      <h1 className={styles.pageHeader__title}>{title}</h1>
      {subTitle && <h1 className={styles.pageHeader__subTitle}>{subTitle}</h1>}
    </>
  )
}
