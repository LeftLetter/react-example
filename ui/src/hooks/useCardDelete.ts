import { useContext } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_REMOVE } from '../reducers/itemReducer'
import { ERROR_MESSAGE } from '../utils/const'

export const useCardDelete = (): ((id: string) => void) => {
  const dispatch = useContext(CardUpdateContext)

  if (dispatch === undefined) {
    throw new Error(ERROR_MESSAGE.USE_CONTEXTS_INNER_PROVIDER)
  }

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
        dispatch({ type: CARD_ACTION_REMOVE, id: id })
      }
    })()
  }

  return removeCard
}
