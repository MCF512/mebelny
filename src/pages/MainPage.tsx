import React, { useState, useEffect } from 'react';
import { Header, MainPageSlider, BasicSlider, Individual, History, Advantages, Delivery, FormSection, Footer, Title, MyBtn, MyContainer } from '../components/components';
import '../reset.scss'
import '../fonts/fonts.module.scss'
import styles from '../App.module.scss'
import slideImg1 from '../assets/mainSlider1.png'
import slideImg2 from '../assets/mainSlider2.png'
import slideImg3 from '../assets/mainSlider3.png'
import table from '../assets/table.png'
import formImage from '../assets/formImage.png'

function MainPage() {
  const items = [
    {
      id: 123,
      btnBackgroundColor: '#FF9619',
      btnColor: '#4B4844',
      background: '#873101',
      image: slideImg1,
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      id: 125,
      btnBackgroundColor: '#CCB2A3',
      btnColor: '#4B4844',
      background: '#4B4844',
      image: slideImg2,
      text: 'Есть все для дома и офиса!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    },
    {
      id: 121,
      btnBackgroundColor: '#FF9619',
      btnColor: '#FFFFFF',
      background: '#CCB2A3',
      image: slideImg3,
      text: 'Создаем уют вместе!',
      btnText: 'Перейти в каталог',
      secondaryText: 'Основано в 2006 году'
    }
  ]
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    console.log(products)
  }, [])


  // getProducts().then(data => console.log(data))


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
    {
      id: 14,
      image: table,
      title: 'стол V120',
      price: 25800
    },
    {
      id: 15,
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

      <MyContainer>
        <Title mb='50px' dark>новинки</Title>
      </MyContainer>

      <BasicSlider
        showPrice
        slidesToShow={3}
        items={basicItems}
        mb='60px'
      />
      <MyBtn
        color='#fff'
        bgColor='#873101'
        margin='0px auto 195px auto'
      >
        Перейти в каталог
      </MyBtn>
      <Individual />
      <History />

      <MyContainer>
        <Title mb='50px' dark>Последние публикации</Title>
      </MyContainer>

      <BasicSlider
        showPrice={false}
        slidesToShow={4}
        items={products}
        mb='80px'
      />

      <Advantages />

      <MyContainer>
        <Title mb='50px' dark>Доставка</Title>
      </MyContainer>
      <Delivery />

      <MyContainer>
        <Title mb='50px' dark>Комфортный сон</Title>
      </MyContainer>
      <BasicSlider
        showPrice={false}
        slidesToShow={4}
        items={basicItems}
        mb='80px'
      />

      <FormSection
        image={formImage}
      />

      <Footer />
    </div>
  );
}

export default MainPage;
