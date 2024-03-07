import {
  CartLink,
  HeaderContainer,
  LocationAction,
  NavigationActionsContainer,
} from './styles'
import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import * as Icon from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <img
        src={coffeDeliveryLogo}
        alt="Logotipo da Coffee Delivery com fonte e logo de copo de café"
      />
      <NavigationActionsContainer>
        <LocationAction type="button">
          <Icon.MapPin weight="fill" color={theme.purple} size={22} />
          São Paulo, SP
        </LocationAction>
        <CartLink to="/cart" title="Carrinho">
          <Icon.ShoppingCart
            weight="fill"
            color={theme['yellow-dark']}
            size={22}
          />
        </CartLink>
      </NavigationActionsContainer>
    </HeaderContainer>
  )
}
