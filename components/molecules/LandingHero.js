import React from "react";
import styles from "./LandingHero.module.css";
import backgroundImage from "@assets/images/cervin.jpg";
import Button from "@components/atoms/Button";
import Icon from "@material-ui/core/Icon";

export default function LandingHero({ handleRedirection }) {
  return (
    <section className={styles.hero__imgContainer}>
      <img src={backgroundImage} alt="montagne cervin"/>
      <div className={styles.hero__overlay}>
        <div className={styles.hero__overlay__inner}>
          <div className={styles.hero__overlay__inner__title}>
            <h1>La montagne en</h1>
            <h1>Nord-Isère</h1>
            <Button onClick={handleRedirection} size="large" variant="light" focus="light">
              Adhérer au club
              <Icon style={{ fontSize: 24, margin: '2px 0 0 8px' }}>chevron_right</Icon>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}