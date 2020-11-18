import FormCreateStory from '@components/organisms/Forms/FormCreateStory'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './DashboardStories.module.css'

DashboardStoryCreator.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

export default function DashboardStoryCreator({ title, tags }) {
  return (
    <div className={styles.container}>
      <span className={styles.container_header}>
        <h1 className={styles.container_header_title}>{title}</h1>
      </span>

      <FormCreateStory tags={tags} />
    </div>
  )
}
