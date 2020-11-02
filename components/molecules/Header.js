import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
import SearchBar from '@components/atoms/SearchBar';
import styles from "@components/molecules/Header.module.css";
import React from "react";
import dynamic from "next/dynamic";

const PostSlider = dynamic(
  () => import('@components/molecules/PostSlider'),
  { ssr: false }
)

Header.propTypes = {
  variant: PropTypes.oneOf(['page', 'search', 'story']).isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default function Header({ variant, meta }) {
  return (
    <div className={styles.header}>
      <div className={styles.header__overlay}>
        <div className={`
          ${styles.header__overlay__inner}
          ${variant === 'story' ? styles.header__overlay__innerStory : ''}
          ${variant === 'search' ? styles.header__overlay__innerSearch : ''}
        `}>
          {variant === 'story' && meta.tag !== undefined && (
            <Button onClick={() => console.log("todo: go on search story with tag filter: " + meta.tag)} type="link"
                    style={{ marginBottom: 42 }}>
              {meta.tag}
            </Button>
          )}
          <h1 className={styles.header__overlay__inner__title}>
            {meta.title}
          </h1>
          {variant === 'page' && (
            <h1 className={styles.header__overlay__inner__subTitle}>
              {meta.subTitle}
            </h1>
          )}
          {variant === 'story' && (
            <>
              <p className={styles.header__overlay__inner__author}>
                {meta.author}
              </p>
              <p className={styles.header__overlay__inner__date}>
                {meta.date}
              </p>

              {!!meta.images.length && (
                <div className={styles.header__overlay__inner__splideContainer}>
                  <PostSlider images={meta.images}/>
                </div>
              )}
            </>
          )}
          {variant === 'search' && (
            <SearchBar
              {...meta}
              style={{ marginTop: 64 }}
            />
          )}
        </div>
      </div>

      <div className={styles.header__background}>
        <div className={
          variant === 'story' && (
            !!meta.images.length
              ? styles.header__background__topStory
              : styles.header__background__topStoryMaxed
          ) || styles.header__background__top
        }/>
        <div className={`
          ${styles.header__background__bottom}
          ${variant === 'story' && !!meta.images.length &&  styles.header__background__bottomStory || ''}
        `}/>
      </div>
    </div>
  );
}
