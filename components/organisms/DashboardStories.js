import PropTypes from 'prop-types'
import CardStoryMin from '@components/molecules/CardStoryMin'
import Button from '@components/atoms/Button'
import BigIcon from '@components/molecules/BigIcon'
import styles from './DashboardStories.module.css'

DashboardStories.propTypes = {
  title: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default function DashboardStories({ title, stories, handleClick }) {
  return (
    <div className={styles.container}>
      <span className={styles.container_header}>
        <h1 className={styles.container_header_title}>{title}</h1>
        <Button
          onClick={handleClick}
          size="medium"
          variant="success"
          focus="success"
        >
          Nouveau
        </Button>
      </span>

      {!!stories.length &&
        stories.map((story, index) => (
          <CardStoryMin
            key={index}
            id={+story.id}
            title={story.title}
            badge={{ color: 'yellow', label: 'wewewe' }}
            categories={story.tags}
            date="wewe"
          />
        ))}
      {!stories.length && (
        <BigIcon
          icon="inbox"
          variant="muted"
          description="Vous n’avez aucun récits, cliquez sur le bouton “nouveau” pour en créer un !"
        />
      )}
    </div>
  )
}
