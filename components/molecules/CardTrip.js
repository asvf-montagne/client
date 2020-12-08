import React from 'react'
import PropTypes from 'prop-types'
import { getDate, getMonth } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useRouter } from 'next/router'
import styles from './CardTrip.module.css'

CardStory.propTypes = {
  id: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  supervisors: PropTypes.arrayOf(PropTypes.string).isRequired,
  activity: PropTypes.string.isRequired,
}

export default function CardStory({
  id,
  title,
  season,
  location,
  supervisors,
  activity,
}) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push(`/trips/${season}/${id}`)
  }

  return (
    <div className={styles.card} onClick={handleRedirection}>
      <div className={styles.card_inner}>
        <div className={styles.card_title}>{title}</div>

        <div className={styles.card_inner_bottom}>
          <div className={styles.card_inner_icon}>
            <div className={styles.card_inner_icon_section}>
              <p className={styles.card_inner_icon_section_day}>
                {getDate(new Date())}
              </p>
            </div>
            <div className={styles.card_inner_icon_section}>
              <p className={styles.card_inner_icon_section_month}>
                {fr.localize.month(getMonth(new Date())).slice(0, 3)}
              </p>
            </div>
          </div>

          <div className={styles.card_inner_content}>
            <div className={styles.card_inner_content_col}>
              <p className={styles.card_inner_content_col_title}>Lieu</p>
              <p className={styles.card_inner_content_col_title}>
                Encadrant(s)
              </p>
              <p className={styles.card_inner_content_col_title}>Activité</p>
            </div>

            <div className={styles.card_inner_content_col}>
              <p className={styles.card_inner_content_col_value}>{location}</p>
              <p className={styles.card_inner_content_col_value}>
                {!!supervisors.length
                  ? supervisors.join(', ')
                  : "Pas d'encadrants"}
              </p>
              <p className={styles.card_inner_content_col_value}>{activity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
