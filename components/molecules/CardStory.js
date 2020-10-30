import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './CardStory.module.css';

CardStory.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default function CardStory({ id, title, image, author, categories, date, description, borderless = false, shadow = true }) {
  const router = useRouter();

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <div className={`${styles.cardStory} ${borderless ? styles.cardStoryBorderless : ''} ${shadow ? styles.cardStoryShadow : ''}`} onClick={handleRedirection}>
      <div className={styles.cardStory__image}>
        <img src={image} alt="card-image" />
      </div>

      <div className={styles.cardStory__content}>
        <div className={styles.cardStory__content__inner}>
          <p className={styles.cardStory__content__inner__categories}>
            {categories}
          </p>
          <h1 className={styles.cardStory__content__inner__title}>
            {title}
          </h1>
          {description && (
            <p className={styles.cardStory__content__inner__description}>
              {description}
            </p>
          )}
          <span className={styles.cardStory__content__inner__span}>
            <p>
              {author}
            </p>
            <p>
              {date}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
