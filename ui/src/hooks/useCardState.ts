import React, { useContext, useEffect } from 'react'
import { CardContext, CardUpdateContext } from '../contexts/cardContext'
import { Cards } from '../utils/types/Cards'

export const useCardState = (): [
  Cards,
  React.Dispatch<React.SetStateAction<Cards>>
] => {
  const card = useContext(CardContext)
  const setCard = useContext(CardUpdateContext)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('api/v1')
      const data = await response.json()
      setCard(data)
    })()
  })

  return [card, setCard]
}
