import Badge from '@components/atoms/Badge'
import styles from '@components/organisms/ContactForm.module.css'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import React from 'react'

DisplaySuccessOrError.propTypes = {
  success: PropTypes.any,
  successMessage: PropTypes.string,
  error: PropTypes.any,
}

export default function DisplaySuccessOrError({
  success,
  successMessage,
  error,
}) {
  if (success || error) {
    return (
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        {success && (
          <Badge color="green">
            <Icon>check_circle</Icon>
            <p
              className={
                styles.landingContact__overlay__contacts__colorParagraph
              }
            >
              {successMessage}
            </p>
          </Badge>
        )}

        {error && (
          <Badge color="red">
            <Icon>cancel</Icon>
            <p
              className={
                styles.landingContact__overlay__contacts__colorParagraph
              }
            >
              {error}
            </p>
          </Badge>
        )}
      </div>
    )
  } else {
    return <></>
  }
}
