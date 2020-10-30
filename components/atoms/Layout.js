import Head from 'next/head';
import PropTypes from 'prop-types';
import NextSeo from 'next-seo';
import Navigation from "@components/atoms/Navigation";
import Footer from "@components/atoms/Footer";

const DEFAULT_SEO = {
  title: 'ASVF Montagne',
  description: 'SEO made easy for Next.js projects',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'http://www.asvf-montagne.fr/',
    title: 'ASVF Montagne',
    description: 'SEO made easy for Next.js projects',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'asvf-montagne.fr',
    imageWidth: 1200,
    imageHeight: 1200
  }
};

Layout.propTypes = {
  less: PropTypes.bool,
};

export default function Layout({ children, less = false }) {
  return (
    <>
      <Head>
        <title>ASVF Montagne</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <NextSeo config={DEFAULT_SEO} />
      {!less && (
        <Navigation />
      )}
      <main>{children}</main>
      {!less && (
        <Footer />
      )}
    </>
  );
}