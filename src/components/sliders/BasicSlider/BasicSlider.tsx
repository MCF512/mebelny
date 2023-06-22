import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicCard } from "./BasicCard/BasicCard";
import styles from './BasicSlider.module.scss'
import { MyContainer } from "../../UI/MyContainer/MyContainer";

interface slide {
  id: number,
  image: string,
  title: string,
  price: number
}

interface sliderProps {
  showPrice: boolean,
  slidesToShow: number,
  items: slide[],
  mb: string
}

export const BasicSlider = ({ showPrice, slidesToShow, items, mb }: sliderProps) => {
  const settings = {
    dots: false,
    slidesToShow: slidesToShow,
    arrows: false
  }

  const style = {
    '--mb': mb
  }

  return (
    <MyContainer>
      <Slider className={styles.BasicSlider} {...settings} style={style}>
        {items.map(item => {
          return (
            <BasicCard
              key={item.id}
              showPrice={showPrice}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          )
        })}
      </Slider>
    </MyContainer>
  )
}