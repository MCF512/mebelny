import React from 'react'
import styles from './MainPageCard.module.scss';

interface cardProps {
  btnBackgroundColor: string,
  btnColor: string,
  background: string,
  image: string,
  text: string,
  btnText: string,
  secondaryText: string
}

export const MainPageCard = ({ btnBackgroundColor, btnColor, background, image, text, btnText, secondaryText }: cardProps) => {

  const customBtnStyle: {} = {
    '--backColor': btnBackgroundColor,
    '--color': btnColor
  }

  return (
    <div className={styles.card}>
      <div className={styles.background} style={{ backgroundColor: background }}></div>
      <p className={styles.secondary}>{secondaryText}</p>

      <div className={styles.cardContent}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>{text}</p>

          <button
            className={styles.btn}
            style={customBtnStyle}
          >{btnText}</button>
        </div>

        <div
          className={styles.img}
          style={{ backgroundImage: `url(${image})` }}>
        </div>
      </div>
    </div >
  )
}