import styles from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = 'create' | 'delete'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonTypes
}

export function Button({
  children,
  buttonStyle = 'create',
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        buttonStyle === 'create' ? styles.buttonCreate : styles.buttonDelete
      }
      {...props}
    >
      {children}
    </button>
  )
}
