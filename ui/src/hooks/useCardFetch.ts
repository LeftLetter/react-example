import { useContext, useEffect } from 'react'
import { CardContext, CardUpdateContext } from '../contexts/cardContext'
import { Cards } from '../utils/types/Cards'

export const useCardFetch = (): Cards => {
  const cards = useContext(CardContext)
  const { setCards } = useContext(CardUpdateContext)

  if (setCards === undefined) {
    throw new Error()
  }

  useEffect(() => {
    ;(async () => {
      const response = await fetch('api/v1')
      const responseObj = await response.json()
      setCards(responseObj)
    })()
    // setCardsはuseStateのため不要
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return cards
}
