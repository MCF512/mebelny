import react, { useState } from 'react'
import styles from './form.module.scss'
import { MyBtn } from '../UI/MyBtn/MyBtn'
import { MyCheckbox } from '../UI/MyCheckbox/MyCheckbox'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'


interface formProps {
  title: string
}

export const Form = ({ title }: formProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      comment: ''
    }
  })


  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(JSON.stringify(data))
    })} className={styles.form}>
      <p className={styles.topText}>Заполните форму</p>
      <h2 className={styles.title}>{title}</h2>

      <input {...register('name', { required: true })} className={styles.input} placeholder='Ваше имя*' />
      <InputMask mask="+7 (999) 999 99-99" type="tel" {...register('phone', { required: "Введите номер телефона" })} className={styles.input} placeholder='Ваш номер телефона*' />
      {errors.phone && <p>{errors.phone.message}</p>}
      <input {...register('city')} className={styles.input} placeholder='Город' />
      <input {...register('comment')} className={styles.input} placeholder='Комментарий' />

      <MyCheckbox
        label='Подтверждая заказ, я принимаю условия пользовательского соглашения'
      />

      <MyBtn
        color='#fff'
        bgColor='#873101'
        margin='0 auto'
      >
        Запросить звонок
      </MyBtn>

      {/* <button type='submit'>Запросить звонок</button> */}
    </form>
  )
}