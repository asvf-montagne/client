import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@components/atoms/Button';
import styles from './FlashInfo.module.css';

FlashInfo.propTypes = {
  infos: PropTypes.array,
  handleClose: PropTypes.func.isRequired,
};

export default function FlashInfo({ infos = [], handleClose }) {
  const [index, setIndex] = useState(0);

  return (
    <div id="test" className={styles.flash}>
      <div className={styles.flash_inner}>
        <a
          onAnimationIteration={() => setIndex(index + 1)}
          className={styles.flash_inner__link}
          href={infos[index % infos.length].redirect}
        >
          {infos[index % infos.length].label}
        </a>
        <Button
          variant="link"
          size="medium"
          focus="primary"
          onClick={handleClose}
        >
          <Icon style={{ fontSize: 24 }}>close</Icon>
        </Button>
      </div>
    </div>
  );
}
