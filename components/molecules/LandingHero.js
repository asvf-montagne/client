import { useState } from 'react'
import backgroundImage from '@assets/images/cervin.webp'
import Button from '@components/atoms/Button'
import Select from '@components/atoms/Select'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LandingHero.module.css'

LandingHero.propTypes = {
  handleRedirection: PropTypes.func.isRequired,
}

export default function LandingHero({ handleRedirection }) {
  const [value, setValue] = useState('')
  return (
    <section className={styles.hero__imgContainer}>
      <img src={backgroundImage} alt="montagne cervin" />
      <div className={styles.hero__overlay}>
        <div className={styles.hero__overlay__inner}>
          <div className={styles.hero__overlay__inner__title}>
            <h1>La montagne en</h1>
            <h1>Nord-Isère</h1>
            <Select value={value} setValue={setValue} placeholder="categories" />
            {/*<Button*/}
            {/*  onClick={handleRedirection}*/}
            {/*  size="large"*/}
            {/*  variant="light"*/}
            {/*  focus="light"*/}
            {/*>*/}
            {/*  Adhérer au club*/}
            {/*  <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>*/}
            {/*    chevron_right*/}
            {/*  </Icon>*/}
            {/*</Button>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
