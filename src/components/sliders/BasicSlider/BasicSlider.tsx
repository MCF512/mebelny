import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicCard } from "./BasicCard/BasicCard";
import styles from './BasicSlider.module.scss'

interface slide {
  id: number,
  image: string,
  title: string,
  price: number
}

interface sliderProps {
  showPrice: boolean,
  slidesToShow: number,
  items: slide[]
}

export const BasicSlider = ({ showPrice, slidesToShow, items }: sliderProps) => {
  const settings = {
    dots: true,
    slidesToShow: slidesToShow,
    arrows: true
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {items.map(item => {
          return (
            <BasicCard
              key={item.id}
              showPrice={true}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          )
        })}
      </Slider>
    </div>
  )
}