import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
export const NavigationActionsContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

const BaseStyleAction = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
`

export const LocationAction = styled(BaseStyleAction).attrs({ as: 'button' })`
  gap: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font: ${(props) => props.theme['text-s']};
`

export const CartLink = styled(BaseStyleAction).attrs({ as: NavLink })`
  background-color: ${(props) => props.theme['yellow-light']};
`
