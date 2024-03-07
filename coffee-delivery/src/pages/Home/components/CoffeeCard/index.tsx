import { InputNumber } from '../../../../components/InputNumber'
import { CoffeeTag } from '../CoffeeTag'
import { CoffeeTagProps } from '../CoffeeTag/styles'
import {
  Actions,
  AddToCart,
  CoffeeCardActions,
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardTags,
  CoffeeCardTitle,
  Price,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

export interface CoffeeCardProps {
  id: string
  name: string
  tags: CoffeeTagProps[]
  description: string
  price: number
  image: string
}

export function CoffeeCard({
  name,
  tags,
  description,
  price,
  image,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt={`Imagem do Café ${name}`} />
      <CoffeeCardTags>
        {tags.map((tag) => {
          return <CoffeeTag key={tag} type={tag} />
        })}
      </CoffeeCardTags>
      <CoffeeCardTitle>{name}</CoffeeCardTitle>
      <CoffeeCardDescription>{description}</CoffeeCardDescription>
      <CoffeeCardActions>
        <Price>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </Price>
        <Actions>
          <InputNumber />
          <AddToCart type="button">
            <ShoppingCart size={22} weight="fill" color="white" />
          </AddToCart>
        </Actions>
      </CoffeeCardActions>
    </CoffeeCardContainer>
  )
}
