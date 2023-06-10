import React from 'react';
import Header from './components/header/Header';
import './reset.scss'
import './fonts/fonts.module.scss'
import styles from './app.module.scss'
import { MainPageSlider } from './components/sliders/MainPageSlider/MainPageSlider';
import slideImg1 from './assets/mainSlider1.png'
import slideImg2 from './assets/mainSlider2.png'
import slideImg3 from './assets/mainSlider3.png'

function App() {
  console.log(slideImg1)
  const items = [
    {
      btnBackgroundColor: '#FF9619',
      btnColor: '#4B4844',
      background: '#873101',
      image: { slideImg1 },
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      btnBackgroundColor: '#CCB2A3',
      btnColor: '#4B4844',
      background: '#4B4844',
      image: { slideImg2 },
      text: 'Есть все для дома и офиса!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      btnBackgroundColor: '#FF9619',
      btnColor: '#FFFFFF',
      background: '#CCB2A3',
      image: { slideImg3 },
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    }
  ]


  return (
    <div className={styles.App}>
      <Header />
      <MainPageSlider
        slidesToShow={2}
        items={items}
      />
    </div>
  );
}

export default App;
