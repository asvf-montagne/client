import Button from '@components/atoms/Button'
import CardStory from '@components/molecules/CardStory'
import Icon from '@material-ui/core/Icon'
import posts from '@services/posts'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './StoriesGrid.module.css'

StoriesGrid.propTypes = {
  stories: PropTypes.array,
  handleFetchMoreStories: PropTypes.func,
  showFetchMoreStoriesBtn: PropTypes.bool,
}

export default function StoriesGrid({
  stories = [],
  handleFetchMoreStories,
  showFetchMoreStoriesBtn,
}) {
  const { view } = posts()

  return (
    <section className={styles.grid}>
      <h3 className={styles.grid__result}>
        {`${stories.length} Récit${stories.length > 1 ? 's' : ''} trouvé${
          stories.length > 1 ? 's' : ''
        }`}
      </h3>
      <div className={styles.grid__inner}>
        {stories.map((story) => (
          <CardStory
            shadow
            border
            key={story.id}
            id={story.id}
            title={story.title}
            description={story.content}
            image={view.getPreviewImage(story)}
            author={story.author}
            categories={story.tags[0]}
            date={view.getPublishedTimeAgo(story)}
          />
        ))}
      </div>
      {showFetchMoreStoriesBtn && (
        <Button
          variant="light"
          size="medium"
          onClick={handleFetchMoreStories}
          focus="primary"
        >
          Charger plus
          <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>
            keyboard_arrow_down
          </Icon>
        </Button>
      )}
    </section>
  )
}
