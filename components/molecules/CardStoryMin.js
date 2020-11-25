import Badge from '@components/atoms/Badge'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styles from './CardStoryMin.module.css'

CardStoryMin.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  badge: PropTypes.shape({
    color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow']).isRequired,
    label: PropTypes.string.isRequired,
  }),
  categories: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleRedirection: PropTypes.func,
}

export default function CardStoryMin({
  id,
  title,
  author,
  badge,
  categories,
  date,
  handleRedirection,
}) {
  const router = useRouter()

  const redirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <div className={styles.cardMin}>
      <h1
        className={styles.cardMin__title}
        onClick={
          handleRedirection === undefined ? redirection : handleRedirection
        }
      >
        {title}
      </h1>
      <div className={styles.cardMin__meta}>
        {author && <p className={styles.cardMin__meta__author}>{author}</p>}
        {badge && <Badge color={badge.color}>{badge.label}</Badge>}
        <span className={styles.cardMin__meta__span}>
          <p>{categories}</p>
          <p>{date}</p>
        </span>
      </div>
    </div>
  )
}
