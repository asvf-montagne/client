import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Badge from '@components/atoms/Badge'
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
}

export default function CardStoryMin({ id, title, author, badge, categories, date }) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <div className={styles.cardMin}>
      <h1 className={styles.cardMin__title} onClick={handleRedirection}>
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
