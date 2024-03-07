import styled from 'styled-components'
import apresentationBackground from '../../assets/apresentation-background.png'

export const HomeContainer = styled.main`
  & > div.background {
    background: url(${apresentationBackground});
    position: absolute;
    left: 0;
    top: 104px;
    width: 100vw;
    height: calc(100vh - 104px);
    background-size: cover;
  }
`

export const ApresentationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  height: calc(100vh - 104px);
  width: 100%;
  z-index: 1;
  position: relative;

  & > article > div:first-child {
    margin-bottom: 4.125rem;
  }
`

export const ApresentationTitle = styled.h1`
  font: ${(props) => props.theme['title-xl']};
  color: ${(props) => props.theme['base-title']};
`

export const ApresentationSubtitle = styled.p`
  font: ${(props) => props.theme['text-l-regular']};
  color: ${(props) => props.theme['base-subtitle']};
`

export const ApresentationInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

const INFO_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface InfoProps {
  infoColor: keyof typeof INFO_COLORS
}

export const Info = styled.span<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font: ${(props) => props.theme['text-m-regular']};
  color: ${(props) => props.theme['base-text']};

  & > div {
    line-height: 0;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: ${(props) => props.theme[INFO_COLORS[props.infoColor]]};
  }
`
