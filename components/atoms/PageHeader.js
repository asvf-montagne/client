import PropTypes from 'prop-types'
import React from 'react'
import styles from './PageHeader.module.css'

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default function PageHeader({ title, subTitle }) {
  return (
    <>
      <h1 className={styles.pageHeader__title}>{title}</h1>
      {typeof subTitle === 'object' &&
        subTitle.map((text, index) => (
          <h3 key={index} className={styles.pageHeader__subTitle}>
            {text}
          </h3>
        ))}
      {typeof subTitle === 'string' && (
        <h3 className={styles.pageHeader__subTitle}>{subTitle}</h3>
      )}
    </>
  )
}
