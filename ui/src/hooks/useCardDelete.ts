import { useContext } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'

export const useCardDelete = (): ((id: string) => void) => {
  const { removeCard } = useContext(CardUpdateContext)

  if (removeCard === undefined) {
    throw new Error()
  }
  return removeCard
}
