import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon';
import { useRouter } from 'next/router'
import Button from '@components/atoms/Button'
import CardStoryMin from '@components/molecules/CardStoryMin'
import CardStory from '@components/molecules/CardStory'
import styles from './LandingInfo.module.css'

import backgroundImage from '@assets/images/cervin_mountain_c7a2ba29c6.jpg'

LandingInfo.propTypes = {
  highlightedStories: PropTypes.array.isRequired
}

export default function LandingInfo({ highlightedStories }) {
  const router = useRouter()

  const handleClubRedirection = () => {
    router.push('/club')
  }

  const handleStoriesRedirection = () => {
    router.push('/stories')
  }

  return (
    <section className={styles.landing}>
      <div className={styles.landing__imgContainer}>
        <img src={backgroundImage} alt="landing-background" />
        <div className={styles.landing__overlay}>
          <div className={styles.container}>
            <div className={styles.landing__overlay__title}>
              <span>La montagne en</span>
              <span>Nord-Isère</span>
              <Button onClick={handleClubRedirection} size="large" type="primary">
                Adhérer au club
                <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.landing__storyHighlight}>
        <div className={styles.container}>
          <div className={styles.landing__storyHighlight__inner}>
            <div className={styles.landing__storyHighlight__inner__col}>
              <div className={styles.landing__storyHighlight__highlight}>
                <div className={styles.landing__storyHighlight__highlight__backgroundRec} />
                <div className={styles.landing__storyHighlight__highlight__overlay}>
                  <div className={styles.landing__storyHighlight__highlight__overlay__inner}>
                    <CardStory
                      id={highlightedStories[0].id}
                      title={highlightedStories[0].title}
                      image={highlightedStories[0].images[0].src}
                      author={highlightedStories[0].name}
                      categories={highlightedStories[0].tags}
                      date={highlightedStories[0].date}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.landing__storyHighlight__inner__col}>
              {highlightedStories.slice(1, 4).map((story) => (
                <CardStoryMin
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  author={story.name}
                  categories={story.tags}
                  date={story.date}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <span className={styles.landing__storyHighlight__span}>
            <Button onClick={handleStoriesRedirection} type="link">
              Voir tous nos récits
              <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
            </Button>
          </span>
        </div>
      </div>
    </section>
  )
}
