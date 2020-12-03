import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './InputLabel.module.css'

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.shape({
    ref: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default function InputLabel({ label, link }) {
  return (
    <span className={styles.span}>
      <label className={styles.label}>{label}</label>
      {link && (
        <Link href={link.ref} scroll={false}>
          <a className={styles.link}>{link.title}</a>
        </Link>
      )}
    </span>
  )
}
