import { CoffeeTagSpan, CoffeeTagSpanProps as CoffeeTagProps } from './styles'

export function CoffeeTag({ type, variant = 'primary' }: CoffeeTagProps) {
  return (
    <CoffeeTagSpan type={type} variant={variant}>
      {type}
    </CoffeeTagSpan>
  )
}
