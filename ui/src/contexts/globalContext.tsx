import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

// Context
export const GlobalContext = createContext<
  { errorMessage: string } | undefined
>(undefined)
export const GlobalUpdateContext = createContext<
  { setErrorMessage: Dispatch<SetStateAction<string>> } | undefined
>(undefined)

type Props = {
  children: React.ReactNode
}

export const GlobalContextProvider: React.VFC<Props> = ({ children }) => {
  // グローバルに管理したいデータはstateやreducerを追加する
  const [errorMessage, setErrorMessage] = useState('')

  // Providerを分けることで不必要なレンダリングを防止
  return (
    <GlobalContext.Provider value={{ errorMessage }}>
      <GlobalUpdateContext.Provider value={{ setErrorMessage }}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}
