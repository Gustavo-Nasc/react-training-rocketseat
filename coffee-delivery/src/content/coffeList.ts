import expressoTradicional from '../assets/coffees/expresso-tradicional.png'
import expressoAmericano from '../assets/coffees/expresso-americano.png'
import expressoCremoso from '../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../assets/coffees/expresso-gelado.png'
import cafeComLeite from '../assets/coffees/cafe-com-leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import havaiano from '../assets/coffees/havaiano.png'
import arabe from '../assets/coffees/arabe.png'
import irlandes from '../assets/coffees/irlandes.png'

import { v4 } from 'uuid'
import { CoffeeCardProps as CoffeeProps } from '../pages/Home/components/CoffeeCard'

export const coffeeList: CoffeeProps[] = [
  {
    id: v4(),
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoTradicional,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso líquido, menos intenso que o tradicional',
    image: expressoAmericano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Macaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Chocolate Quente',
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Cubano',
    tags: ['especial', 'alcoolico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Arabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Irlandês',
    tags: ['especial', 'alcoolico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 9.9,
  },
]
