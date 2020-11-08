import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
import styles from "./StoryHeader.module.css";
import React from "react";

StoryHeader.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object
}

export default function StoryHeader({ tag, title, author, date, image }) {
  return (
    <>
      {tag !== undefined && (
        <Button
          variant="link"
          focus="link"
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
      {image && (
        <img src={image.url} className={styles.storyHeader__image} alt={image.name} />
      )}
    </>
  );
}
