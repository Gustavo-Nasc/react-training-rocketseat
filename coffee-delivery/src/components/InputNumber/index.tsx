import { useTheme } from 'styled-components'
import { InputNumberContainer } from './styles'
import * as Icon from 'phosphor-react'

export function InputNumber() {
  const theme = useTheme()

  return (
    <InputNumberContainer>
      <span>
        <Icon.Minus size={14} color={theme.purple} />
      </span>
      <input type="number" min={1} max={9} defaultValue={1} />
      <span>
        <Icon.Plus size={14} color={theme.purple} />
      </span>
    </InputNumberContainer>
  )
}
