import FormContact from '@components/organisms/Forms/FormContact'
import Icon from '@material-ui/core/Icon'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LandingContact.module.css'

const PartnersSlider = dynamic(
  () => import('@components/molecules/PartnersSlider'),
  {
    ssr: false,
  },
)

LandingContact.propTypes = {
  partners: PropTypes.array.isRequired,
}

export default function LandingContact({ partners }) {
  return (
    <section className={styles.landingContact}>
      <div className={styles.landingContact__overlay}>
        <div className={styles.landingContact__overlay__inner}>
          <h1 className={styles.landingContact__overlay__title}>
            Nos partenaires
          </h1>
          <PartnersSlider partners={partners} />
        </div>

        <div className={styles.landingContact__overlay__contacts}>
          <div>
            <h1 className={styles.landingContact__overlay__contacts__title}>
              Nous contacter
            </h1>
            <p
              className={styles.landingContact__overlay__contacts__description}
            >
              Remplissez le formulaire et nous vous répondrons le plus
              rapidement possible.
            </p>

            <div className={styles.landingContact__overlay__contacts__icons}>
              <div
                className={
                  styles.landingContact__overlay__contacts__icons__inner
                }
              >
                <button
                  className={
                    styles.landingContact__overlay__contacts__icons_btn
                  }
                >
                  <Icon
                    style={{
                      fontSize: 24,
                      color: '#0C75FF',
                      margin: '2px 0 0 8px',
                    }}
                  >
                    mail
                  </Icon>
                  <p
                    className={
                      styles.landingContact__overlay__contacts__icons_btn__title
                    }
                  >
                    contact@asvf-montagne.fr
                  </p>
                </button>

                <h3
                  className={
                    styles.landingContact__overlay__contacts__inner__title
                  }
                >
                  Ouvert le jeudi de 18h30 à 20h
                </h3>

                <button
                  className={
                    styles.landingContact__overlay__contacts__icons_btn
                  }
                >
                  <Icon
                    style={{
                      fontSize: 24,
                      color: '#0C75FF',
                      margin: '2px 0 0 8px',
                    }}
                  >
                    room
                  </Icon>
                  <p
                    className={
                      styles.landingContact__overlay__contacts__icons_btn__title
                    }
                  >
                    22 rue du Passou 38090 Vaulx-Milieu
                  </p>
                </button>
                <button
                  className={
                    styles.landingContact__overlay__contacts__icons_btn
                  }
                >
                  <Icon
                    style={{
                      fontSize: 24,
                      color: '#0C75FF',
                      margin: '2px 0 0 8px',
                    }}
                  >
                    phone
                  </Icon>
                  <p
                    className={
                      styles.landingContact__overlay__contacts__icons_btn__title
                    }
                  >
                    06 81 26 88 14
                  </p>
                </button>
              </div>
            </div>
          </div>

          <FormContact />
        </div>
      </div>

      <div className={styles.landingContact__background}>
        <div className={styles.landingContact__background__top} />
        <div className={styles.landingContact__background__bottom} />
      </div>
    </section>
  )
}
