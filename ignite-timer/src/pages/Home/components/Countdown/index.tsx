import { useEffect, useContext } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  // Extraindo as informações que foram passadas no Contexto dos Cycles da Home
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  // Variáveis auxiliares para os segundos e minutos Ciclo ativo
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  // Método que preenche até um tamanho determinado
  // No caso, inserimos que o tamanho deve ser de 2 caracteres, e caso não possua
  // o tamanho determinado, inserimos '0' para completar no começo (start) da string
  const minutes = String(minutesAmount).padStart(2, '0')

  // E fazemos a mesma coisa com os segundos
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
    else document.title = 'Formação React | Ignite Timer'
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(0)

          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    // Essa retorno em função do useEffect tem a responsabilidade de fazer algo
    // quando a activeCycle for mudada

    // No nosso caso, queremos resetar o que estávamos fazendo no useEffect anterior
    // deletando os intervalos que eu não é necessário para o novo ciclo
    // Com isso, sempre que começarmos um novo ciclo, o intervalo do anterior é apagado
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
