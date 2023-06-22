import react from 'react'
import styles from './individual.module.scss'
import { Title } from '../UI/Title/Title'
import { MyBtn } from '../UI/MyBtn/MyBtn'
import image from '../../assets/individual.png'
import { MyContainer } from '../UI/MyContainer/MyContainer'

export const Individual = () => {

  return (
    <div className={styles.individual}>
      <MyContainer>
        <div className={styles.wrapper}>


          <div className={styles.img}>
            <img src={image} />
          </div>

          <div className={styles.info}>
            <Title
              mb='30px'
              dark={false}
            >Индивидуальная мебель</Title>

            <p className={styles.textTop}>
              Подбор размеров
            </p>
            <p className={styles.textBot}>
              Любой товар на нашем сайте имеет стандартные размеры ГОСТ, при необходимости внесем изменения
            </p>

            <MyBtn
              bgColor='#873101'
              color='#FFFFFF'
            >Индидуальная мебель</MyBtn>
          </div>
        </div>
      </MyContainer>
    </div>
  )
}