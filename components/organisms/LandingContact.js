import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '@hooks/useWindowSize';
import LandingForm from '@components/molecules/LandingForm'
import styles from './LandingContact.module.css';

const sponsors = [
  {
    alt: 'sponsor-petzl',
    asset: require('../../assets/images/logo-sponsor-petzl.jpg')
  },
  {
    alt: 'sponsor-expe',
    asset: require('../../assets/images/logo-sponsor-expe.png')
  },
  {
    alt: 'sponsor-au-vieux-campeur',
    asset: require('../../assets/images/logo-sponsor-au-vieux-campeur.png')
  },
  {
    alt: 'sponsor-FFCAM',
    asset: require('../../assets/images/logo-sponsor-FFCAM.png')
  },
  {
    alt: 'sponsor-haribo',
    asset: require('../../assets/images/logo-sponsor-haribo.jpg')
  },
  {
    alt: 'sponsor-simond',
    asset: require('../../assets/images/logo-sponsor-simond.png')
  },
  {
    alt: 'sponsor-sport-2000',
    asset: require('../../assets/images/logo-sponsor-sport-2000.jpg')
  }
];

LandingContact.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default function LandingContact({ fullName, setFullName, email, setEmail, message, setMessage, onSubmit }) {
  const { width: size } = useWindowSize();


  return (
    <section className={styles.landingContact}>

      <div className={styles.landingContact__overlay}>
        <div className={styles.landingContact__overlay__inner}>
          <h1 className={styles.landingContact__overlay__title}>
            Nos partenaires
          </h1>

          <Swiper
            loop
            slidesPerView={4}
            spaceBetween={32}
            style={{ margin: '92px 0', width: '100%' }}
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div key={index} className={styles.landingContact__swiperItem}>
                  <img alt={sponsor.alt} src={sponsor.asset} className={styles.landingContact__swiperItem__image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.landingContact__overlay__contacts}>
          <div className={styles.landingContact__overlay__contacts__inner}>
            <div className={styles.landingContact__overlay__contacts__col}>
              <h1 className={styles.landingContact__overlay__contacts__col__title}>
                Nous contacter
              </h1>
              <p className={styles.landingContact__overlay__contacts__col__description}>
                Remplissez le formulaire et nous vous répondrons le plus rapidement possible.
              </p>

              <div className={styles.landingContact__overlay__contacts__col__icons}>
                <div className={styles.landingContact__overlay__contacts__col__icons__inner}>

                  <button className={styles.landingContact__overlay__contacts__col__icons_btn}>
                    <Icon style={{ fontSize: 24, color: '#0C75FF', margin: '2px 0 0 8px' }}>
                      mail
                    </Icon>
                    <p className={styles.landingContact__overlay__contacts__col__icons_btn__title}>
                      contact@asvf-montagne.fr
                    </p>
                  </button>
                  <button className={styles.landingContact__overlay__contacts__col__icons_btn}>
                    <Icon style={{ fontSize: 24, color: '#0C75FF', margin: '2px 0 0 8px' }}>
                      room
                    </Icon>
                    <p className={styles.landingContact__overlay__contacts__col__icons_btn__title}>
                      22 rue du Passou 38090 Vaulx-Milieu
                    </p>
                  </button>
                  <button className={styles.landingContact__overlay__contacts__col__icons_btn}>
                    <Icon style={{ fontSize: 24, color: '#0C75FF', margin: '2px 0 0 8px' }}>
                      phone
                    </Icon>
                    <p className={styles.landingContact__overlay__contacts__col__icons_btn__title}>
                      06 81 26 88 14 (jeudi de 18h30 à 20h)
                    </p>
                  </button>
                </div>
              </div>

              {size <= 1184 && (
                <LandingForm
                  position="center"
                  email={email}
                  fullName={fullName}
                  message={message}
                  setEmail={setEmail}
                  setFullName={setFullName}
                  setMessage={setMessage}
                  onSubmit={onSubmit}
                />
              )}
            </div>

            {size > 1184 && (
              <LandingForm
                email={email}
                fullName={fullName}
                message={message}
                setEmail={setEmail}
                setFullName={setFullName}
                setMessage={setMessage}
                onSubmit={onSubmit}
              />
            )}
          </div>
        </div>
      </div>

        <div className={styles.landingContact__background}>
          <div className={styles.landingContact__background__top} />
          <div className={styles.landingContact__background__bottom} />
        </div>
    </section>
  );
}
