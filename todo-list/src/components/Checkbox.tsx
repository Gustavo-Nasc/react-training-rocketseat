import { CheckCircle, Circle } from 'phosphor-react'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  checked?: boolean
  onChangeChecked: (checked: boolean) => void
}

export function Checkbox({ checked = false, onChangeChecked }: CheckboxProps) {
  function handleChangeCheked() {
    onChangeChecked(checked)
  }

  return (
    <div onClick={handleChangeCheked}>
      {checked ? (
        <CheckCircle
          size={24}
          weight="fill"
          className={`${styles.checkbox} ${styles.checked}`}
        />
      ) : (
        <Circle
          size={24}
          weight="duotone"
          className={`${styles.checkbox} ${styles.notChecked}`}
        />
      )}
    </div>
  )
}
