import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon';
import { useRouter } from 'next/router'
import Button from '@components/atoms/Button'
import CardStoryMin from '@components/molecules/CardStoryMin'
import styles from './LandingInfo.module.css'

import backgroundMountainAsset from '../../assets/images/cervin_mountain_c7a2ba29c6.jpg'

LandingInfo.propTypes = {
  highlightedStories: PropTypes.array.isRequired
}

export default function LandingInfo({ highlightedStories }) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push('/club')
  }

  return (
    <section className={styles.landing}>
      <div className={styles.landing__imgContainer}>
        <img src={backgroundMountainAsset} alt="landing-background" />
        <div className={styles.landing__overlay}>
          <div className={styles.container}>
            <div className={styles.landing__overlay__title}>
              <span>La montagne en</span>
              <span>Nord-Isère</span>
              <Button onClick={handleRedirection} size="large" type="primary">
                Adhérer au club
                <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.landing__storyHighlight}>
        <div className={styles.container}>
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
    </section>
  )
}
