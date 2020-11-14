import Button from '@components/atoms/Button'
import useWindowSize from '@hooks/useWindowSize'
import PropTypes from 'prop-types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './StoryHeader.module.css'

DisplayTag.propTypes = {
  tag: PropTypes.string,
}

function DisplayTag({ tag }) {
  return (
    <>
      {tag !== undefined && (
        <Button
          variant="link"
          size="medium"
          focus="link"
          onClick={() =>
            console.log('todo: go on search story with tag filter: ' + tag)
          }
          style={{ marginBottom: 42 }}
        >
          {tag}
        </Button>
      )}
    </>
  )
}

DisplayImage.propTypes = {
  image: PropTypes.object,
}

function DisplayImage({ image }) {
  return (
    <>
      {image && (
        <img
          src={image.url}
          className={styles.storyHeader__image}
          alt={image.name}
        />
      )}
    </>
  )
}

StoryHeader.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
  loading: PropTypes.bool,
}

export default function StoryHeader({
  tag,
  title,
  author,
  date,
  image,
  loading,
}) {
  const { width: size } = useWindowSize()

  return (
    <>
      {loading ? (
        <Skeleton style={{ marginBottom: 42 }} width={100} height={14} />
      ) : (
        <DisplayTag tag={tag} />
      )}
      <h1 className={styles.storyHeader__title}>
        {loading ? <Skeleton width={400} height={36} /> : title}
      </h1>
      <p className={styles.storyHeader__author}>
        {loading ? <Skeleton width={150} height={16} /> : author}
      </p>
      <p className={styles.storyHeader__date}>
        {loading ? <Skeleton width={120} height={16} /> : date}
      </p>

      {loading ? (
        <Skeleton
          style={{ margin: '60px 0px' }}
          width={size > 700 ? 800 : 400}
          height={500}
        />
      ) : (
        <DisplayImage image={image} />
      )}
    </>
  )
}
