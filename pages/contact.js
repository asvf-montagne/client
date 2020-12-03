import Layout from '@components/atoms/Layout'
import PageHeader from '@components/atoms/PageHeader'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import FormContact from '@components/organisms/Forms/FormContact'
import config from '@helpers/config'
import Icon from '@material-ui/core/Icon'
import { CorporateContactJsonLd, NextSeo } from 'next-seo'
import React from 'react'
import styles from '../styles/Contact.module.css'

function ContactSeo() {
  return <>
    <NextSeo
      title="Contact"
      description="Contactez l'asvf montagne soit mail mail soit par ce formulaire"
      additionalMetaTags={[
        { name: 'og:email', content: config.contacts.rawEmail },
        { name: 'og:phone', content: config.contacts.rawPhone },
        { name: 'og:region', content: 'FR' },
        { name: 'og:country-name', content: 'France' },
        { name: 'og:postal-code', content: '38090' },
        { name: 'og:street-address', content: '22 Rue du Passou' },
        { name: 'og:locality', content: 'Vaulx-Milieu' },
        { name: 'og:latitude', content: '45.614337' },
        { name: 'og:longitude', content: '5.173802' },
      ]}
    />
    <CorporateContactJsonLd
      url="https://beta.asvf-montagne.fr"
      contactPoint={[
        { telephone: config.contacts.rawPhone, areaServed: 'FR', availableLanguage: 'French', contactType: 'Astreinte' }
      ]}
    />
  </>
}

export default function Contact() {
  return (
    <>
      <ContactSeo/>
      <Layout>
        <SplitBackgroundOverlay padding="96px 0 96px 0" topHalfHeight={90}>
          <PageHeader
            title="Nous contacter"
            subTitle={[
              'Remplissez le formulaire et nous vous répondrons le plus rapidement possible.',
              'L\'astreinte est ouverte le jeudi de 18h30 à 20h pour les appels et rendez-vous sur place.',
            ]}
          />
        </SplitBackgroundOverlay>
        <section className={styles.contact_form}>
          <div className={styles.container}>
            <div className={styles.contact_form_buttons}>
              <a
                className={styles.contact_form_button}
                href={config.contacts.mail}
                target="_blank"
                rel="noreferrer"
              >
                <Icon>mail</Icon>
                contact@asvf-montagne.fr
              </a>
              <a
                className={styles.contact_form_button}
                href={config.contacts.map}
                target="_blank"
                rel="noreferrer"
              >
                <Icon>room</Icon>
                22 rue du Passou 38090 Vaulx-Milieu
              </a>
              <a
                className={styles.contact_form_button}
                href={config.contacts.phone}
                target="_blank"
                rel="noreferrer"
              >
                <Icon>phone</Icon>
                06 81 26 88 14
              </a>
            </div>
          </div>
          <FormContact/>
        </section>
      </Layout>
    </>
  )
}
