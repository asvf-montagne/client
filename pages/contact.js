import Layout from '@components/atoms/Layout'
import PageHeader from '@components/atoms/PageHeader'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import FormContact from '@components/organisms/Forms/FormContact'
import Icon from '@material-ui/core/Icon'
import React from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 96px 0" topHalfHeight={90}>
        <PageHeader
          title="Nous contacter"
          subTitle="Remplissez le formulaire et nous vous répondrons le plus rapidement possible."
        />
      </SplitBackgroundOverlay>
      <section className={styles.contact_form}>
        <div className={styles.container}>
          <div className={styles.contact_form_buttons}>
            <button className={styles.contact_form_button}>
              <Icon>mail</Icon>
              contact@asvf-montagne.fr
            </button>
            <button className={styles.contact_form_button}>
              <Icon>room</Icon>
              22 rue du Passou 38090 Vaulx-Milieu
            </button>
            <button className={styles.contact_form_button}>
              <Icon>phone</Icon>
              06 81 26 88 14
            </button>
          </div>
        </div>
        <FormContact />
      </section>
    </Layout>
  )
}
