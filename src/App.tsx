import React from 'react';
import Header from './components/header/Header';
import './reset.scss'
import './fonts/fonts.module.scss'
import styles from './App.module.scss'
import { MainPageSlider } from './components/sliders/MainPageSlider/MainPageSlider';
import slideImg1 from './assets/mainSlider1.png'
import slideImg2 from './assets/mainSlider2.png'
import slideImg3 from './assets/mainSlider3.png'
import table from './assets/table.png'
import { BasicSlider } from './components/sliders/BasicSlider/BasicSlider';

function App() {
  console.log(slideImg1)
  const items = [
    {
      btnBackgroundColor: '#FF9619',
      btnColor: '#4B4844',
      background: '#873101',
      image: slideImg1,
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      btnBackgroundColor: '#CCB2A3',
      btnColor: '#4B4844',
      background: '#4B4844',
      image: slideImg2,
      text: 'Есть все для дома и офиса!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      btnBackgroundColor: '#FF9619',
      btnColor: '#FFFFFF',
      background: '#CCB2A3',
      image: slideImg3,
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    }
  ]


  const basicItems = [
    {
      id: 123,
      image: table,
      title: 'стол V120',
      price: 25800
    },
    {
      id: 113,
      image: table,
      title: 'стол V120',
      price: 25800
    },
    {
      id: 12,
      image: table,
      title: 'стол V120',
      price: 25800
    },
    {
      id: 13,
      image: table,
      title: 'стол V120',
      price: 25800
    },
  ]

  return (
    <div className={styles.App}>
      <Header />
      <MainPageSlider
        slidesToShow={2}
        items={items}
      />
      <BasicSlider
        showPrice
        slidesToShow={3}
        items={basicItems}
      />
    </div>
  );
}

export default App;
