import React from 'react'
import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import PageHeader from '@components/atoms/PageHeader'
import ContactForm from '@components/organisms/ContactForm'
import styles from '../styles/Contact.module.css'
import Icon from '@material-ui/core/Icon'

export default function Contact() {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  //
  // const handleSubmit = () => {
  //   console.log(fullName, email, message);
  // };

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
        <ContactForm />
      </section>
    </Layout>
  )
}
