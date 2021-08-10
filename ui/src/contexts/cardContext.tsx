import React, { useState } from 'react'
import { Cards } from '../utils/types/Cards'

export const CardContext = React.createContext<Cards>([])

export const CardUpdateContext = React.createContext<{
  setCards: React.Dispatch<React.SetStateAction<Cards>> | undefined
  removeCard: ((id: string) => void) | undefined
}>({ setCards: undefined, removeCard: undefined })

type Props = {
  children: React.ReactNode
}

export const CardContextProvider: React.VFC<Props> = (props) => {
  const [cards, setCards] = useState<Cards>([])
  const removeCard = (id: string) => setCards(cards.filter((e) => e.id !== id))

  return (
    <CardContext.Provider value={cards}>
      <CardUpdateContext.Provider value={{ setCards, removeCard }}>
        {props.children}
      </CardUpdateContext.Provider>
    </CardContext.Provider>
  )
}
