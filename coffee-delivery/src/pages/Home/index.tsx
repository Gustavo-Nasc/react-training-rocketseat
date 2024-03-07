import {
  ApresentationContainer,
  ApresentationInfos,
  ApresentationSubtitle,
  ApresentationTitle,
  HomeContainer,
  Info,
} from './styles'
import apresentationImage from '../../assets/apresentation-image.png'
import * as Icon from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <div className="background" />
      <ApresentationContainer>
        <article>
          <div>
            <ApresentationTitle>
              Encontre o café perfeito para qualquer hora do dia
            </ApresentationTitle>
            <ApresentationSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </ApresentationSubtitle>
          </div>
          <ApresentationInfos>
            <Info infoColor="yellow-dark">
              <div>
                <Icon.ShoppingCart weight="fill" color="#fff" />
              </div>
              Compra simples e segura
            </Info>

            <Info infoColor="gray">
              <div>
                <Icon.Package weight="fill" color="#fff" />
              </div>
              Embalagem mantém o café intacto
            </Info>

            <Info infoColor="yellow-dark">
              <div>
                <Icon.Timer weight="fill" color="#fff" />
              </div>
              Entrega rápida e rastreada
            </Info>

            <Info infoColor="purple">
              <div>
                <Icon.Coffee weight="fill" color="#fff" />
              </div>
              O café chega fresquinho até você
            </Info>
          </ApresentationInfos>
        </article>
        <img src={apresentationImage} alt="" />
      </ApresentationContainer>
    </HomeContainer>
  )
}
