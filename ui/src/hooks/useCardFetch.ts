import { useContext, useEffect } from 'react'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_SET } from '../reducers/itemReducer'
import { getCard } from '../services/getCard'
import { ERROR_MESSAGE } from '../utils/const'

export const useCardFetch = (): void => {
  const dispatch = useContext(CardUpdateContext)

  // ContextをProvider外で呼び出した場合はエラー
  if (dispatch === undefined) {
    throw new Error(ERROR_MESSAGE.USE_CONTEXTS_INNER_PROVIDER)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getCard()
        dispatch({ type: CARD_ACTION_SET, cards: res })
      } catch (error) {
        // TODO: エラーメッセージをセット
        return
      }
    })()
    // 初期化用のため
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
