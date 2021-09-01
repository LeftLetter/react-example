import { useContext, useEffect } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_SET } from '../reducers/itemReducer'
import { errorMessages } from '../utils/constTexts'

export const useCardFetch = (): void => {
  const dispatch = useContext(CardUpdateContext)

  if (dispatch === undefined) {
    throw new Error(errorMessages.USE_CONTEXTS_INNER_PROVIDER)
  }

  useEffect(() => {
    ;(async () => {
      const response = await fetch('api/v1')
      const responseObj = await response.json()
      dispatch({ type: CARD_ACTION_SET, cards: responseObj })
    })()
    // dispatchはuseReducerのため不要
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
