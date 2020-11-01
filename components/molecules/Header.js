import PropTypes from 'prop-types';
import SwiperCore, { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@components/atoms/Button';
import SearchBar from '@components/atoms/SearchBar';
import styles from "@components/molecules/Header.module.css";
import React from "react";

SwiperCore.use([Navigation, A11y]);

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
            <Button type="link" style={{ marginBottom: 42 }}>
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

              <div className={styles.header__overlay__inner__swiperContainer}>
                <Swiper
                  loop
                  navigation
                  slidesPerView={1}
                  spaceBetween={64}
                  style={{ width: '100%' }}
                >
                  {meta.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div key={index} className={styles.header__swiperItem}>
                        <img alt={image.alternativeText || image.name} src={image.url} className={styles.header__swiperItem__image}/>
                        {image.caption !== undefined && <figcaption className={styles.header__swiperItem__caption}>
                          {image.caption}
                        </figcaption>}

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
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
        <div className={`
          ${variant === 'story' ? styles.header__background__topStory : styles.header__background__top}
        `}/>
        <div className={`
          ${variant === 'story' ? styles.header__background__bottomStory : styles.header__background__bottom}
        `}/>
      </div>
    </div>
  );
}
