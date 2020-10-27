import Head from 'next/head';
import Navigation from "@components/atoms/Navigation";
import Footer from "@components/atoms/Footer";

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