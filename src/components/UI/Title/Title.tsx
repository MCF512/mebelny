import React from "react";
import styles from "./Title.module.scss"

interface titleProps {
  children: React.ReactNode,
  mb: string,
  dark: boolean
}

export const Title = (props: titleProps) => {

  const customStyle: {} = {
    '--mb': props.mb
  }

  return (
    <h2 className={props.dark ? styles.titleDark : styles.title} style={customStyle}>
      {props.children}
    </h2>
  )
}