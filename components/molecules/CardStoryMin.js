import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './CardStoryMin.module.css';

CardStoryMin.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default function CardStoryMin({ id, title, author, categories, date }) {
  const router = useRouter();

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <div className={styles.cardMin}>
      <h1 className={styles.cardMin__title} onClick={handleRedirection}>
        {title}
      </h1>
      <div className={styles.cardMin__meta}>
        <p className={styles.cardMin__meta__author}>
          {author}
        </p>
        <span className={styles.cardMin__meta__span}>
          <p>
            {categories}
          </p>
          <p>
            {date}
          </p>
        </span>
      </div>
    </div>
  );
}
