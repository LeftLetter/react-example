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
  const removeCard = (id: string) => {
    ;(async () => {
      let isOK = true
      const response = await fetch('api/v1', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      }).catch(() => {
        isOK = false
      })

      if (isOK && response instanceof Response) {
        setCards(cards.filter((e) => e.id !== id))
      }
    })()
  }

  return (
    <CardContext.Provider value={cards}>
      <CardUpdateContext.Provider value={{ setCards, removeCard }}>
        {props.children}
      </CardUpdateContext.Provider>
    </CardContext.Provider>
  )
}
