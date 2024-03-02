import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

// Action Props
interface PayloadProps {
  newCycle?: Cycle
}

interface ActionState {
  type: ActionTypes
  payload?: PayloadProps
}

export function cyclesReducer(state: CyclesState, action: ActionState) {
  // Essa função recebe os parâmetros de estado atual, em tempo real, da variável
  // e a ação que o usuário está querendo realizar para alteração da variável
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }

      // Com o Immer, nós podemos trabalhar com variáveis imutáveis de maneira
      // simples. No primeiro parâmetro, passamos qual informação queremos modi-
      // ficar, e no segundo parâmetro, recebemos um rascunho, que se trata das
      // alterações que queremos fazer.
      return produce(state, (draft) => {
        if (action.payload) {
          const { newCycle } = action.payload

          if (newCycle) {
            draft.cycles.push(newCycle)
            draft.activeCycleId = newCycle.id
          }
        }
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      // Note que, agora, com o immer, eu facilito também a manutenção do meu
      // código, pois estou desacoplando o escopo do map, que é mais complexo.
      // Agora, eu não preciso percorrer todo o vetor de ciclos, eu apenas
      // altero o ciclo de um index
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      // O 'findIndex', quando não encontra o valor citado, retorna -1.
      // E então, caso esse ciclo não seja encontrado, nós retornamos o ciclo
      // sem nenhuma alteração
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      // Assim como na operação anterior, fazemos o mesmo aqui
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    default:
      return state
  }
}
