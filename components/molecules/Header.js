import PropTypes from 'prop-types';
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
        <div className={styles.header__overlay__inner}>
          <h1 className={styles.header__overlay__inner__title}>
            {meta.title}
          </h1>
          {variant === 'page' && (
            <h1 className={styles.header__overlay__inner__subTitle}>
              {meta.subTitle}
            </h1>
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