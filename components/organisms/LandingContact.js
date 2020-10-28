import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const refFullName = useRef(null);
  const refEmail = useRef(null);
  const refMessage = useRef(null);

  return (
    <section className={styles.landingContact}>

      <div className={styles.landingContact__overlay}>
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
            <SwiperSlide>
              <div key={index} className={styles.landingContact__swiperItem}>
                <img alt={sponsor.alt} src={sponsor.asset} className={styles.landingContact__swiperItem__image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*    <StyledContact>*/}
        {/*      <StyledContactCol>*/}
        {/*        <h1>Nous contacter</h1>*/}
        {/*        <p>Remplissez le formulaire et nous vous répondrons le plus rapidement possible.</p>*/}
        {/*        <div className="icon-group">*/}
        {/*          <div className="center">*/}
        {/*            <StyledContactIcon>*/}
        {/*              <IconMail style={{ color: '#0C75FF' }} />*/}
        {/*              <p>contact@asvf-montagne.fr</p>*/}
        {/*            </StyledContactIcon>*/}
        {/*            <StyledContactIcon>*/}
        {/*              <IconRoom style={{ color: '#0C75FF' }} />*/}
        {/*              <p>22 rue du Passou 38090 Vaulx-Milieu </p>*/}
        {/*            </StyledContactIcon>*/}
        {/*            <StyledContactIcon>*/}
        {/*              <IconPhone style={{ color: '#0C75FF' }} />*/}
        {/*              <p>06 81 26 88 14 (jeudi de 18h30 à 20h)</p>*/}
        {/*            </StyledContactIcon>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </StyledContactCol>*/}

        {/*      <StyledContactCol>*/}
        {/*        <StyledContactForm>*/}
        {/*          <Input*/}
        {/*            label="Nom et prénom"*/}
        {/*            placeholder="Jonh Doe"*/}
        {/*            ref={refFullName}*/}
        {/*            value={fullName}*/}
        {/*            onKeyDown={(event) => {*/}
        {/*              event.preventDefault()*/}
        {/*              refEmail.current.focus()*/}
        {/*            }}*/}
        {/*            onChange={(event) => setFullName(event.target.value)}*/}
        {/*            icon="user"*/}
        {/*          />*/}
        {/*          <Input*/}
        {/*            label="Email"*/}
        {/*            placeholder="jonhdoe@example.com"*/}
        {/*            ref={refEmail}*/}
        {/*            value={email}*/}
        {/*            onKeyDown={(event) => {*/}
        {/*              event.preventDefault()*/}
        {/*              refMessage.current.focus()*/}
        {/*            }}*/}
        {/*            onChange={(event) => setEmail(event.target.value)}*/}
        {/*            icon="mail"*/}
        {/*          />*/}
        {/*          <TextArea*/}
        {/*            label="Message"*/}
        {/*            placeholder="Un super message pour l’asvf montagne !"*/}
        {/*            ref={refMessage}*/}
        {/*            value={message}*/}
        {/*            onKeyDown={(event) => onSubmit(event)}*/}
        {/*            onChange={(event) => setMessage(event.target.value)}*/}
        {/*          />*/}
        {/*          <Button onClick={onSubmit} type="plain-blue" size="medium" style={{ marginLeft: 'auto' }}>*/}
        {/*            Envoyer le message*/}
        {/*          </Button>*/}
        {/*        </StyledContactForm>*/}
        {/*      </StyledContactCol>*/}
        {/*    </StyledContact>*/}
      </div>

        <div className={styles.landingContact__background}>
          <div className={styles.landingContact__background__top} />
          <div className={styles.landingContact__background__bottom} />
        </div>
    </section>
  );
}
