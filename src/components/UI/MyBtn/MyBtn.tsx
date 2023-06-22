import react from 'react';
import styles from './MyBtn.module.scss'

interface btnProps {
  color: string,
  bgColor: string,
  after?: string,
  children: React.ReactNode,
  margin?: string
}

export const MyBtn = ({ color, bgColor, children, margin }: btnProps) => {
  const customStyle: {} = {
    'margin': margin,
    '--bgColor': bgColor,
    '--color': color
  }

  return (
    <button className={styles.btn} style={customStyle}>
      {children}
    </button>
  )
}