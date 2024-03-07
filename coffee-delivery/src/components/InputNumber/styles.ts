import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  & > span {
    cursor: pointer;
    line-height: 0;
  }

  & > input {
    &::-webkit-inner-spin-button {
      appearance: none;
      -webkit-appearance: none;
    }

    &:focus {
      box-shadow: none;
    }

    font: ${(props) => props.theme['text-m-regular']};
    width: max-content;
    text-align: center;
    border: none;
    background-color: transparent;
  }
`
