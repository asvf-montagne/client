import React from "react";
import PropTypes from 'prop-types';
import CardStory from '@components/molecules/CardStory';
import styles from "./SuggestedStories.module.css";
import { posts } from "../../services/posts";

DefaultPageLayout.propTypes = {
  stories: PropTypes.array.isRequired
}

export default function DefaultPageLayout({ stories }) {
  return (
    <section className={styles.suggestedStories}>
      <div className={styles.suggestedStories__inner}>
        <div className={styles.suggestedStories__inner__box}>
          <h1 className={styles.suggestedStories__title}>
            Continuer de lire ...
          </h1>
          <div className={styles.suggestedStories__cards}>
            {stories.map((story) => (
              <CardStory
                key={story.id}
                id={story.id}
                title={story.title}
                image={posts.getImage(story)}
                author={story.author}
                categories={story.tags[0]}
                date={posts.getPublishedTimeAgo(story)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
