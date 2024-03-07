import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  & > img {
    width: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: calc(0px - 2.5rem);
  }
`

export const CoffeeCardTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  margin-bottom: 1rem;
`

export const CoffeeCardTitle = styled.strong`
  font: ${(props) => props.theme['title-s']};
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const CoffeeCardDescription = styled.p`
  font: ${(props) => props.theme['text-s']};
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
  text-align: center;
`

export const CoffeeCardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: auto;
`

export const Price = styled.span`
  color: ${(props) => props.theme['base-text']};
  font: ${(props) => props.theme['text-s']};

  & > strong {
    font: ${(props) => props.theme['title-m']};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddToCart = styled.button`
  line-height: 0;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem;
`
