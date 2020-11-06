import React from "react";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import Icon from "@material-ui/core/Icon";
import Button from "@components/atoms/Button";
import styles from './FlashInfo.module.css';

FlashInfo.propTypes = {
  infos: PropTypes.array,
  handleClose: PropTypes.func.isRequired,
};

export default function FlashInfo({ infos = [], handleClose }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(infos[0].redirect)} className={styles.flash}>
      <div className={styles.flash_inner}>
        <span className={styles.flash_inner_span}>
          {infos[0].label}
        </span>
      </div>

      <div className={styles.flash_btn}>
        <Button variant="link" size="medium" onClick={handleClose}>
          <Icon style={{ fontSize: 24 }}>close</Icon>
        </Button>
      </div>
    </div>
  );
}