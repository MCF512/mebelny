import React from "react";
import Slider from "react-slick";
import { MainPageCard } from './Card/MainPageCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './MainPageSlider.module.scss'

interface MainPageItem {
  id: number;
  btnBackgroundColor: string;
  btnColor: string;
  background: string;
  image: string;
  text: string;
  btnText: string;
  secondaryText: string;
}

interface sliderProps {
  slidesToShow?: number,
  items: MainPageItem[]
}

export const MainPageSlider = ({ slidesToShow, items }: sliderProps) => {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false
  }


  return (
    <Slider className={styles.slider} {...settings}>
      {items.map(item => {
        return (
          <MainPageCard
            id={item.id}
            btnBackgroundColor={item.btnBackgroundColor}
            btnColor={item.btnColor}
            background={item.background}
            image={item.image}
            text={item.text}
            btnText={item.btnText}
            secondaryText={item.secondaryText}
          />
        )
      })}
    </Slider>
  )
}