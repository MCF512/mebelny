import { MyContainer } from '../..'
import styles from './aboutWork.module.scss'
import img from '../../../assets/aboutWork.png'

export const AboutWork = () => {

  return (
    <div className={styles.wrapper}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <img src={img} alt="" />
          </div>

          <div className={styles.content}>
            <p className={styles.title}>
              Как устроена наша работа
            </p>

            <p className={styles.text}>
              Производство компании и центральный офис объединены в единую компьютерную сеть, и мастер каждого цеха получает наряды на работу и отмечает их исполнение в единой информационной среде компании.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}