import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@components/atoms/Button';
import SearchBar from '@components/atoms/SearchBar';
import styles from "@components/molecules/Header.module.css";

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
          {variant === 'story' && (
            <Button type="link" style={{ marginBottom: 42 }}>
              {meta.categories}
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
                  slidesPerView={1}
                  spaceBetween={64}
                  style={{ width: '100%' }}
                >
                  {meta.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div key={index} className={styles.header__swiperItem}>
                        <img alt={image.alt} src={image.src} className={styles.header__swiperItem__image} />
                        <figcaption className={styles.header__swiperItem__caption}>
                          {image.caption}
                        </figcaption>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
          {variant === 'search' && (
            <SearchBar
              categories={meta.categories}
              category={meta.category}
              setCategory={meta.setCategory}
              search={meta.search}
              setSearch={meta.setSearch}
              handleSearch={meta.handleSearch}
              placeholder={meta.placeholder}
              style={{ marginTop: 64 }}
            />
          )}
        </div>
      </div>

      <div className={styles.header__background}>
        <div className={`
          ${variant === 'story' ? styles.header__background__topStory : styles.header__background__top}
        `} />
        <div className={`
          ${variant === 'story' ? styles.header__background__bottomStory : styles.header__background__bottom}
        `} />
      </div>
    </div>
  );
}