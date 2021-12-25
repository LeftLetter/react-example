import { useContext, useEffect } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_SET } from '../reducers/itemReducer'
import { getCard } from '../services/getCard'
import { ERROR_MESSAGES } from '../utils/const'

export const useCardFetch = (): void => {
  const dispatch = useContext(CardUpdateContext)

  if (dispatch === undefined) {
    throw new Error(ERROR_MESSAGES.USE_CONTEXTS_INNER_PROVIDER)
  }

  useEffect(() => {
    ;(async () => {
      const res = await getCard()
      dispatch({ type: CARD_ACTION_SET, cards: res })
    })()
    // dispatchはuseReducerのため不要
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
