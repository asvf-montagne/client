import React from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './PostSlider.module.css';

PostSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default function PostSlider({ images }) {
  return (
    <div style={{ width: '100%' }}>
      <Splide
        key={String(Math.random())}
        options={{
          type: 'loop',
          perPage: 3,
          arrows: true,
          pagination: false,
          focus: 'center',
          start: 0,
          autoWidth: true,
          autoHeight: true,
          gap: '5rem',
          cover: true,
        }}
      >
        {images.map(({ alternativeText, name, url, caption }, index) => (
          <SplideSlide key={index}>
            <div className={styles.header__splideItem}>
              <img
                alt={alternativeText || name}
                src={url}
                className={styles.header__splideItem__image}
              />
              {caption !== undefined && (
                <figcaption className={styles.header__splideItem__caption}>
                  {caption}
                </figcaption>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
