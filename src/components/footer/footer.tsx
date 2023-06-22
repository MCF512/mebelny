import react from 'react'
import styles from './footer.module.scss'
import { MyContainer } from '../UI/MyContainer/MyContainer'
import Logo from '../UI/logo/Logo'
import inst from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import { MyBtn } from '../UI/MyBtn/MyBtn'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <MyContainer>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <Logo dark={false} />

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Каталог
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  О компании
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Индивидуальная мебель
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Доставка
                </a>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Корзина
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Как купить
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Акции
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Контакты
                </a>
              </li>
              <li className={styles.listItem}>
                <a className={styles.link}>
                  Нужна помощь
                </a>
              </li>
            </ul>

            <div className={styles.media}>
              <div className={styles.icons}>
                <a href="" className={styles.mediaLink}>
                  <img src={inst} alt="insta" />
                </a>
                <a href="" className={styles.mediaLink}>
                  <img src={facebook} alt="facebook" />
                </a>
              </div>

              <a className={styles.phone} href=''>
                +7 (812)-945-86-05
              </a>

              <MyBtn
                color='#4B4844'
                bgColor='rgba(204, 178, 163, 1)'
                margin='0 0 20px 0'
              >Персональная консультация</MyBtn>
              <p className={styles.public}>
                Сайт не является публичной офертой
              </p>
            </div>
          </div>

          <p className={styles.copy}>
            © 2006–2021 Интернет-магазин
            «Мебельный-Санкт-Петербург» — мебель
          </p>
        </div>
      </MyContainer>
    </footer >
  )
}