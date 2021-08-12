import { Dispatch, SetStateAction, useContext } from 'react'
import { CardContext, CardUpdateContext } from '../contexts/cardContext'
import { Cards } from '../utils/types/Cards'

export const useCard = (): {
  cards: Cards
  setCards: Dispatch<SetStateAction<Cards>>
} => {
  const cards = useContext(CardContext)
  const { setCards } = useContext(CardUpdateContext)

  if (setCards === undefined) {
    throw new Error()
  }
  return { cards, setCards }
}
