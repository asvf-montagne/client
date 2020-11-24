import CardStory from '@components/molecules/CardStory'
import posts from '@services/posts'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './SuggestedStories.module.css'

SuggestedStories.propTypes = {
  stories: PropTypes.array.isRequired,
}

export default function SuggestedStories({ stories }) {
  const { view } = posts()

  return (
    <section className={styles.suggestedStories}>
      <div className={styles.suggestedStories__inner}>
        <div className={styles.suggestedStories__inner__box}>
          <h1
            className={
              stories.length > 0
                ? styles.suggestedStories__title
                : styles.suggestedStories__titleEnd
            }
          >
            {stories.length > 0
              ? 'Continuer de lire ...'
              : `Bravo vous avez lu le dernier récit !`}
          </h1>
          {stories.length > 0 && (
            <div className={styles.suggestedStories__cards}>
              {stories.map((story) => (
                <CardStory
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  description={story.content}
                  image={view.getPreviewImage(story)}
                  author={story.author}
                  categories={story.tags[0]}
                  date={view.getTimeAgo(story)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
