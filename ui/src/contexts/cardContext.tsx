import React, { createContext, Dispatch, useReducer } from 'react'
import { ActionType, cardReducer, initialState } from '../reducers/itemReducer'

// Contextの型
export type Card = {
  id: string
  title: string
  description: string
}
export type Cards = Card[]

// Context
export const CardContext = createContext<Cards>(initialState)
export const CardUpdateContext = createContext<
  Dispatch<ActionType> | undefined
>(undefined)

type Props = {
  children: React.ReactNode
}

export const CardContextProvider: React.VFC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState)

  // Providerを分けることで不必要なレンダリングを防止
  return (
    <CardContext.Provider value={state}>
      <CardUpdateContext.Provider value={dispatch}>
        {children}
      </CardUpdateContext.Provider>
    </CardContext.Provider>
  )
}
