import React from "react";
import Logo from "../UI/logo/Logo";
import styles from './header.module.scss'

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className={styles.header__nav}>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              каталог
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              индивидуальная мебель
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              контакты
            </a>
          </li>
          <li className={styles.header__item}>
            <Logo dark={true} />
          </li>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              о компании
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="tel:+7" className={styles.header__link}>
              +7 (812)-945-86-05
            </a>
          </li>
          <li>
            <form action="#">
              <select name="" id="">
                <option value="RU">
                  RU
                </option>
                <option value="KZ">
                  KZ
                </option>
                <option value="EU">
                  EN
                </option>
              </select>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;