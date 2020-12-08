import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import Button from '@components/atoms/Button'
import CardTrip from '@components/molecules/CardTrip'
import styles from './TripsGrid.module.css'

TripsGrid.propTypes = {
  trips: PropTypes.array,
  season: PropTypes.string,
  handleFetchMoreStories: PropTypes.func,
  showFetchMoreStoriesBtn: PropTypes.bool,
  loading: PropTypes.bool,
}

export default function TripsGrid({
  trips = [],
  handleFetchMoreStories,
  showFetchMoreStoriesBtn,
  loading,
  season,
}) {
  return (
    <section className={styles.grid}>
      <h3 className={styles.grid__result}>
        {`${trips.length} Sortie${trips.length > 1 ? 's' : ''} trouvé${
          trips.length > 1 ? 's' : ''
        }`}
      </h3>
      <div className={styles.grid__inner}>
        {trips.map((trip) => (
          <CardTrip
            key={trip.id}
            id={trip.id}
            title={trip.title}
            season={season}
            activity={trip.activity}
            location={trip.location}
            supervisors={trip.supervisors}
          />
        ))}
      </div>

      {loading ? (
        <Button variant="primary" size="large" focus="primary" loading={true}>
          Chargement ...
        </Button>
      ) : showFetchMoreStoriesBtn ? (
        <Button
          variant="light"
          size="medium"
          onClick={handleFetchMoreStories}
          focus="primary"
          loading={loading}
        >
          Charger plus
          <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>
            keyboard_arrow_down
          </Icon>
        </Button>
      ) : (
        <></>
      )}
    </section>
  )
}
