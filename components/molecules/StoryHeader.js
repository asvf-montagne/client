import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
// import PostSlider from '@components/molecules/PostSlider';
import styles from "./StoryHeader.module.css";
import React from "react";

StoryHeader.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  images: PropTypes.array
}

export default function StoryHeader({ tag, title, author, date, images }) {
  return (
    <>
      {tag !== undefined && (
        <Button
          type="link"
          onClick={() => console.log("todo: go on search story with tag filter: " + tag)}
          style={{ marginBottom: 42 }}
        >
          {tag}
        </Button>
      )}
      <h1 className={styles.storyHeader__title}>
        {title}
      </h1>
      <p className={styles.storyHeader__author}>
        {author}
      </p>
      <p className={styles.storyHeader__date}>
        {date}
      </p>

      {/*{!!images.length && (*/}
      {/*  <div className={styles.storyHeader__splideContainer}>*/}
      {/*    <PostSlider images={images}/>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
}
