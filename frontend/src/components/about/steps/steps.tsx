import react from 'react';
import styles from './steps.module.scss';
import { MyContainer } from '../..';

interface props {
  image: string;
}

export const AboutSteps = ({ image }: props) => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} />
          </div>

          <div className={styles.right}>
            <h3 className={styles.title}>
              Этапы работы:
            </h3>

            <ol className={styles.list}>
              <li className={styles.item}>
                Консультация и подбор мебели
              </li>
              <li className={styles.item}>
                Визуализация
              </li>
              <li className={styles.item}>
                Внесение предоплаты
              </li>
              <li className={styles.item}>
                Изготовление
              </li>
              <li className={styles.item}>
                Доставка
              </li>
            </ol>

            <p className={styles.text}>
              От приема каждого, по своему индивидуального заказа до отгрузки готовой продукции вам.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}