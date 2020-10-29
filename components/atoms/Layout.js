import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from "@components/atoms/Navigation";
import Footer from "@components/atoms/Footer";

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