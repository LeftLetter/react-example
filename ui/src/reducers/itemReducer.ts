import { Card, Cards } from '../types/Cards'
import { ERROR_MESSAGE } from '../utils/const'

export const CARD_ACTION_ADD = 'add'
export const CARD_ACTION_REMOVE = 'remove'
export const CARD_ACTION_SET = 'set'

export type ActionType =
  | { type: typeof CARD_ACTION_ADD; card: Card }
  | { type: typeof CARD_ACTION_REMOVE; id: string }
  | { type: typeof CARD_ACTION_SET; cards: Cards }

export const initialState: Cards = []

export const cardReducer = (state: Cards, action: ActionType): Cards => {
  switch (action.type) {
    case CARD_ACTION_ADD:
      return [...state, action.card]
    case CARD_ACTION_REMOVE:
      return state.filter((e) => e.id !== action.id)
    case CARD_ACTION_SET:
      return action.cards
    default:
      throw new Error(ERROR_MESSAGE.UNDEFINED_ACTION_TYPE)
  }
}
