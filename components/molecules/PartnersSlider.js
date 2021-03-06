import { Splide, SplideSlide } from '@splidejs/react-splide'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './PartnersSlider.module.css'

PartnerSlider.propTypes = {
  partners: PropTypes.array.isRequired,
}

export default function PartnerSlider({ partners }) {
  return (
    <div className={styles.partnersSlider__container}>
      <Splide
        key={String(Math.random())}
        options={{
          type: 'loop',
          perPage: 5,
          breakpoints: {
            900: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
          },
          autoplay: true,
          arrows: false,
          pagination: false,
          focus: 'center',
          interval: 2000,
          start: 0,
        }}
      >
        {partners.map(({ name, url, link }, index) => (
          <SplideSlide key={index}>
            <div className={styles.partnersSlider__splideItem}>
              <img
                alt={name}
                src={url}
                className={styles.partnersSlider__splideItem__image}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
