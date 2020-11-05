import styles from "./LandingStoriesHighlight.module.css";
import CardStory from "@components/molecules/CardStory";
import {posts} from "../../services/posts";
import CardStoryMin from "@components/molecules/CardStoryMin";
import Button from "@components/atoms/Button";
import Icon from "@material-ui/core/Icon";
import React from "react";

export default function LandingStoriesHighlight({ highlightedStories, handleRedirection }) {
  const highlightedStory = highlightedStories[0]

  return (
    <section className={styles.storiesHighlight}>
      <div className={styles.storiesHighlight__inner}>
        <div className={styles.storiesHighlight__grid}>
          <div className={styles.storiesHighlight__inner__col}>
            <div className={styles.storiesHighlight__highlight}>
              <div className={styles.storiesHighlight__highlight__backgroundRec}/>
              <div className={styles.storiesHighlight__highlight__overlay}>
                <div className={styles.storiesHighlight__highlight__overlay__inner}>
                  <CardStory
                    shadow={false}
                    borderless
                    id={highlightedStory.id}
                    title={highlightedStory.title}
                    description={highlightedStory.content}
                    image={posts.getImage(highlightedStory)}
                    author={highlightedStory.author}
                    categories={highlightedStory.tags[0]}
                    date={posts.getPublishedTimeAgo(highlightedStory)}
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
                date={posts.getPublishedTimeAgo(story)}
              />
            ))}
          </div>
        </div>

        <span className={styles.storiesHighlight__span}>
          <Button variant="link" size="medium" onClick={handleRedirection}>
            Voir tous nos récits
            <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
          </Button>
        </span>
      </div>
    </section>
  );
}