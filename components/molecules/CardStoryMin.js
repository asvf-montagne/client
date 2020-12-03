import Badge from '@components/atoms/Badge'
import Link from 'next/link'
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
  href: PropTypes.string,
}

export default function CardStoryMin({
  id,
  title,
  author,
  badge,
  categories,
  date,
  href,
}) {
  return (
    <div className={styles.cardMin}>
      <Link href={href !== undefined ? href : `/stories/${id}`} scroll={false}>
        <a style={{ textDecoration: 'none' }}>
          <h2 className={styles.cardMin__title}>{title}</h2>
        </a>
      </Link>
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
