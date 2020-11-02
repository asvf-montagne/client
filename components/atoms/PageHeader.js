import PropTypes from 'prop-types';
import styles from "./PageHeader.module.css";
import React from "react";

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default function PageHeader({ title, subTitle }) {
  return (
    <>
      <h1 className={styles.pageHeader__title}>
        {title}
      </h1>
      <h1 className={styles.pageHeader__subTitle}>
        {subTitle}
      </h1>
    </>
  );
}
