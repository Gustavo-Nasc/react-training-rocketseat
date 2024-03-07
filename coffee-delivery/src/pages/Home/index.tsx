import {
  ApresentationContainer,
  ApresentationInfos,
  ApresentationSubtitle,
  ApresentationTitle,
  CoffeeList,
  ContentListContainer,
  ContentListTitle,
  ContentTags,
  HomeContainer,
  Info,
} from './styles'
import * as Icon from 'phosphor-react'
import {
  CoffeeCard
} from './components/CoffeeCard'
import { CoffeeTag } from './components/CoffeeTag'
import { CoffeeTagProps } from './components/CoffeeTag/styles'
import apresentationImage from '../../assets/apresentation-image.png'
import { coffeeList } from '../../content/coffeList'


export function Home() {
  const coffeeTags: CoffeeTagProps[] = [
    'tradicional',
    'especial',
    'com leite',
    'gelado',
  ]

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
      <ContentListContainer>
        <div>
          <ContentListTitle>Nossos Cafés</ContentListTitle>
          <ContentTags>
            {coffeeTags.map((tag) => {
              return <CoffeeTag key={tag} variant="secondary" type={tag} />
            })}
          </ContentTags>
        </div>
        <CoffeeList>
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
              />
            )
          })}
        </CoffeeList>
      </ContentListContainer>
    </HomeContainer>
  )
}
