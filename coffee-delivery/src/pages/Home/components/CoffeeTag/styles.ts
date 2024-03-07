import styled from 'styled-components'

export type CoffeeTagProps =
  | 'tradicional'
  | 'especial'
  | 'com leite'
  | 'alcoolico'
  | 'gelado'

export interface CoffeeTagSpanProps {
  type: CoffeeTagProps
  variant?: 'primary' | 'secondary'
}

export const CoffeeTagSpan = styled.span<CoffeeTagSpanProps>`
  font: ${(props) => props.theme.tag};
  color: ${(props) => props.theme['yellow-dark']};
  border: 1px solid ${(props) => props.variant === 'primary' ? props.theme['yellow-light'] : props.theme['yellow-dark']};
  background-color: ${(props) =>
    props.variant === 'primary' ? props.theme['yellow-light'] : 'transparent'};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  cursor: ${(props) => props.variant === 'secondary' && 'pointer'};
`
