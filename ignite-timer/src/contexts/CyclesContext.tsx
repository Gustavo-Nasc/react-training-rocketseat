import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

// Contexto para compartilhar as informações do Cycle
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number

  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // O Reducer, assim como o State, serve para armazenarmos informações e
  // alterar essa informação futuramente. Utilizamos o Reducer para informações
  // mais complexas, onde a operação para alteração de valores querer uma lógica
  // maior.
  // ---------------------------------------------------------------------------
  // Por exemplo como no array de ciclos: Sempre que vamos alterar seu valor,
  // utilizamos uma lógica mais custoso, é uma operação mais onerosa

  // No caso, desmembramos as operações em arquivos diferentes, para facilitar a
  // manutenção do código
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      // Podemos passar essa terceira função para o useReducer
      // Essa função é disparada quando o Reducer é criado e é utilizada para
      // recuperar os dados iniciais do Reducer de algum outro lugar, como no nos-
      // so exemplo, do Local Storage
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  // Variável auxiliar para o Ciclo ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle)
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))

    return 0
  })

  // useEffect para salvar no Local Storage os ciclos toda vez que esse sofrer
  // alterações, seja adicionado, removendo ou alterando elementos dos ciclos
  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  // Função que irá marcar a tarefa atual como finalizada
  function markCurrentCycleAsFinished() {
    // O dispatch é a função que irá modificar os 'cycles'. De alguma forma
    // Precisamos enviar alguma informação que, dentro do Reducer, podemos
    // distinguir diferentes actions
    dispatch(markCurrentCycleAsFinishedAction())
  }

  // Função que irá criar uma nova tarefa e adicionar no cycle
  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    // Para evitar conflitos com o ciclo anterior, resetamos o tempo que havia
    // passado para 0, evitando conflitos visuais
    setAmountSecondsPassed(0)
  }

  // Função que irá interromper a tarefa atual
  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
