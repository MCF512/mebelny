import React from "react";
import styles from "./BasicCard.module.scss"

interface cardProps {
  showPrice: boolean,
  image: string,
  price: number,
  title: string
}

export const BasicCard = ({ showPrice, image, price, title }: cardProps) => {

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} className={styles.image} />
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.price}>
        {showPrice ? `${price} RUB` : ''}
      </p>
    </div>
  )
}