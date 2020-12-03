import Button from '@components/atoms/Button'
import CardStory from '@components/molecules/CardStory'
import CardStoryMin from '@components/molecules/CardStoryMin'
import Icon from '@material-ui/core/Icon'
import posts from '@services/posts'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LandingStoriesHighlight.module.css'

LandingStoriesHighlight.propTypes = {
  highlightedStories: PropTypes.array.isRequired,
}

export default function LandingStoriesHighlight({ highlightedStories }) {
  const view = posts().view
  const highlightedStory = highlightedStories[0]

  return (
    <section className={styles.storiesHighlight}>
      <div className={styles.storiesHighlight__inner}>
        <div className={styles.storiesHighlight__grid}>
          <div className={styles.storiesHighlight__inner__col}>
            <div className={styles.storiesHighlight__highlight}>
              <div
                className={styles.storiesHighlight__highlight__backgroundRec}
              />
              <div className={styles.storiesHighlight__highlight__overlay}>
                <div
                  className={styles.storiesHighlight__highlight__overlay__inner}
                >
                  <CardStory
                    shadow={false}
                    borderless
                    id={highlightedStory.id}
                    title={highlightedStory.title}
                    description={highlightedStory.content}
                    image={view.getPreviewImage(highlightedStory)}
                    author={highlightedStory.author}
                    categories={highlightedStory.tags[0]}
                    date={view.getTimeAgo(highlightedStory)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.storiesHighlight__inner__col}>
            {highlightedStories.slice(1, 4).map((story) => (
              <CardStoryMin
                key={story.id}
                id={story.id}
                title={story.title}
                author={story.author}
                categories={story.tags[0]}
                date={view.getTimeAgo(story)}
              />
            ))}
          </div>
        </div>

        <span className={styles.storiesHighlight__span}>
          <Button
            link={{ href: '/stories', scroll: false }}
            variant="link"
            size="medium"
          >
            Voir tous nos récits
            <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>
              chevron_right
            </Icon>
          </Button>
        </span>
      </div>
    </section>
  )
}
