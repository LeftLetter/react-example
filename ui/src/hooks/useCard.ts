import { useContext } from 'react'
import { CardContext, Cards } from '../contexts/cardContext'

export const useCard = (): Cards => {
  const cards = useContext(CardContext)

  return cards
}
