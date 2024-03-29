import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: min(95%, 74rem);
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  overflow: auto;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
