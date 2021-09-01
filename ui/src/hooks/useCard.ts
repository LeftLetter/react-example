import { useContext } from 'react'
import { CardContext } from '../contexts/cardContext'
import { Cards } from '../types/Cards'

export const useCard = (): Cards => {
  const cards = useContext(CardContext)

  return cards
}
