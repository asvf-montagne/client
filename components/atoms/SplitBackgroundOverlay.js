import PropTypes from 'prop-types';
import styles from "./SplitBackgroundOverlay.module.css";
import React from "react";

SplitBackgroundOverlay.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  topHalfHeight: PropTypes.number,
  children: PropTypes.object
}

export default function SplitBackgroundOverlay({ padding = '92px 0', topHalfHeight, children }) {
  return (
    <div className={styles.box__overlay}>
      <div className={styles.overlay}>
        <div className={styles.overlay__inner} style={{ padding }}>
          {children}
        </div>
      </div>

      <div className={styles.underlay__background}>
        <div className={styles.underlay__background__top} style={{ height: `${topHalfHeight}%` }} />
        {topHalfHeight !== 100 && (
          <div className={styles.underlay__background__bottom} style={{ height: `${100 - topHalfHeight}%` }} />
        )}
      </div>
    </div>
  );
}
