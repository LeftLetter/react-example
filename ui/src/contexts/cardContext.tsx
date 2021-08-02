import React, { useState } from 'react'
import { Cards } from '../utils/types/Cards'

export const CardContext = React.createContext<Cards>([])

export const CardUpdateContext =
  // ここは要調査
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.createContext<React.Dispatch<React.SetStateAction<Cards>>>(undefined)

type Props = {
  children: React.ReactNode
}

export const CardContextProvider: React.VFC<Props> = (props) => {
  const [cards, setCards] = useState<Cards>([])

  return (
    <CardContext.Provider value={cards}>
      <CardUpdateContext.Provider value={setCards}>
        {props.children}
      </CardUpdateContext.Provider>
    </CardContext.Provider>
  )
}
