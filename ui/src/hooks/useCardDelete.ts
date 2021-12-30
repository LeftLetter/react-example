import { useContext } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_REMOVE } from '../reducers/itemReducer'
import { deleteCard } from '../services/deleteCard'
import { ERROR_MESSAGE } from '../utils/const'

export const useCardDelete = (): ((id: string) => void) => {
  const dispatch = useContext(CardUpdateContext)

  // ContextをProvider外で呼び出した場合はエラー
  if (dispatch === undefined) {
    throw new Error(ERROR_MESSAGE.USE_CONTEXTS_INNER_PROVIDER)
  }

  const removeCard = (id: string) => {
    ;(async () => {
      try {
        await deleteCard(id)
        dispatch({ type: CARD_ACTION_REMOVE, id: id })
      } catch (error) {
        // TODO: エラーメッセージをセット
        return
      }
    })()
  }

  return removeCard
}
