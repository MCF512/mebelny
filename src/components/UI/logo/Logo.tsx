import React from "react";
import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';
import styles from './logo.module.scss';

interface logoProps {
  dark: boolean
}

function Logo({ dark }: logoProps) {
  return (
    <>
      {dark ?
        (
          <div className={styles.logo__wrapper}>
            <img src={logoDark} alt="logo" />
            <p className={styles.logo__text}>Мебельный Санкт-Петербург</p>
          </div>
        )
        :
        (
          <div className={styles.logo__wrapper}>
            <img src={logoLight} alt="logo" />
          </div>
        )
      }
    </>
  )
}

export default Logo;