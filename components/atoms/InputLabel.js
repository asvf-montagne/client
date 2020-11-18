import { useRouter } from 'next/router'
import React from 'react'
import styles from './InputLabel.module.css'
import PropTypes from 'prop-types'

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.shape({
    ref: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default function InputLabel({ label, link }) {
  const router = useRouter()
  return (
    <span className={styles.span}>
      <label className={styles.label}>{label}</label>
      {link && (
        <a className={styles.link} onClick={() => router.push(link.ref)}>
          {link.title}
        </a>
      )}
    </span>
  )
}
