import React from 'react'
import PropTypes from 'prop-types'
import CardStory from '@components/molecules/CardStory'
import styles from './FooterLinkedStory.module.css'

FooterLinkedStory.propTypes = {
  story: PropTypes.object.isRequired,
}

export default function FooterLinkedStory({ story }) {
  return (
    <section className={styles.suggestedStories}>
      <div className={styles.suggestedStories__inner}>
        <div className={styles.suggestedStories__inner__box}>
          <h1 className={styles.suggestedStories__title}>
            Lire le récit associé?
          </h1>
          <CardStory
            key={story.id}
            id={story.id}
            title={story.title}
            description={story.content}
            image={story.image}
            author={story.author}
            categories={story.tags[0]}
            date="wewewe"
          />
        </div>
      </div>
    </section>
  )
}
