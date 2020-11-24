import FormCreateOrUpdateStory from '@components/organisms/Forms/FormCreateOrUpdateStory'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './DashboardStories.module.css'

DashboardStoryCreator.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  user: PropTypes.object,
  story: PropTypes.object,
}

export default function DashboardStoryCreator({ title, tags, user, story }) {
  return (
    <div className={styles.container}>
      <span className={styles.container_header}>
        <h1 className={styles.container_header_title}>{title}</h1>
      </span>

      <FormCreateOrUpdateStory tags={tags} author={user.id} story={story} />
    </div>
  )
}
