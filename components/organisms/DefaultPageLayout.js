import React from "react";
import PropTypes from 'prop-types';
import Blog from '@components/atoms/Blog';
import Header from '@components/molecules/Header';
import CardStory from '@components/molecules/CardStory';
import styles from "@components/organisms/DefaultPageLayout.module.css";
import { posts } from "../../services/posts";

DefaultPageLayout.propTypes = {
  variant: PropTypes.oneOf(['page', 'story']).isRequired,
  meta: PropTypes.object.isRequired,
  data: PropTypes.object,
}

export default function DefaultPageLayout({ variant, meta, data }) {
  return (
    <>
      <Header variant={variant} meta={meta} />
      <section className={`
        ${styles.blog}
        ${variant === 'story' && !meta.images.length && styles.blogMargin}
      `}>
        <Blog data={data} />
      </section>
      {variant === 'story' && (
        <section className={styles.suggestedStories}>
          <div className={styles.suggestedStories__inner}>
            <div className={styles.suggestedStories__inner__box}>
              <h1 className={styles.suggestedStories__title}>
                Continuer de lire ...
              </h1>
              <div className={styles.suggestedStories__cards}>
                {meta.suggestedStories.map((story) => (
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
      )}
    </>
  );
}
