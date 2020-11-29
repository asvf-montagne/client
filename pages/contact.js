import Layout from '@components/atoms/Layout'
import PageHeader from '@components/atoms/PageHeader'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import FormContact from '@components/organisms/Forms/FormContact'
import Icon from '@material-ui/core/Icon'
import React from 'react'
import config from '@helpers/config'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 96px 0" topHalfHeight={90}>
        <PageHeader
          title="Nous contacter"
          subTitle={[
            'Remplissez le formulaire et nous vous répondrons le plus rapidement possible.',
            "L'astreinte est ouverte le jeudi de 18h30 à 20h pour les appels et rendez-vous sur place.",
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
        <FormContact />
      </section>
    </Layout>
  )
}
