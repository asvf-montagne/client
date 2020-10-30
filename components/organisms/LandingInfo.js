import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { useRouter } from 'next/router';
import Button from '@components/atoms/Button';
import CardStoryMin from '@components/molecules/CardStoryMin';
import CardStory from '@components/molecules/CardStory';
import styles from './LandingInfo.module.css';
import backgroundImage from '@assets/images/cervin_mountain_c7a2ba29c6.jpg';
import { posts } from "../../services/posts";
import React from "react";

landingInfoInfo.propTypes = {
  highlightedStories: PropTypes.array.isRequired,
};

export default function landingInfoInfo({ highlightedStories }) {
  const router = useRouter();

  const handleClubRedirection = () => {
    router.push('/club')
  }

  const handleStoriesRedirection = () => {
    router.push('/stories')
  }

  const highlightedStory = highlightedStories[0]

  return (
    <section className={styles.landingInfo}>
      <div className={styles.landingInfo__imgContainer}>
        <img src={backgroundImage} alt="landing-background"/>
        <div className={styles.landingInfo__overlay}>
          <div className={styles.container}>
            <div className={styles.landingInfo__overlay__title}>
              <h1>La montagne en</h1>
              <h1>Nord-Isère</h1>
              <Button onClick={handleClubRedirection} size="large" type="light" focus="light">
                Adhérer au club
                <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.landingInfo__storyHighlight}>
        <div className={styles.container}>
          <div className={styles.landingInfo__storyHighlight__inner}>
            <div className={styles.landingInfo__storyHighlight__inner__col}>
              <div className={styles.landingInfo__storyHighlight__highlight}>
                <div className={styles.landingInfo__storyHighlight__highlight__backgroundRec}/>
                <div className={styles.landingInfo__storyHighlight__highlight__overlay}>
                  <div className={styles.landingInfo__storyHighlight__highlight__overlay__inner}>
                    <CardStory
                      shadow={false}
                      borderless
                      id={highlightedStory.id}
                      title={highlightedStory.title}
                      image={posts.getImageMediumURL(highlightedStory)}
                      author={'todo'}
                      categories={posts.getFirstTag(highlightedStory)}
                      date={posts.getPublishedTimeAgo(highlightedStory)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.landingInfo__storyHighlight__inner__col}>
              {highlightedStories.slice(1, 4).map((story) => (
                <CardStoryMin
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  author={'todo'}
                  categories={posts.getFirstTag(story)}
                  date={posts.getPublishedTimeAgo(story)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <span className={styles.landingInfo__storyHighlight__span}>
            <Button onClick={handleStoriesRedirection} type="link">
              Voir tous nos récits
              <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
}
