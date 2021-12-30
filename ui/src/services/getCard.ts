import { Cards } from '../contexts/cardContext'
import { API_URL } from '../utils/const'
import { fetchJson } from '../utils/fetcher'

export type GetCardResponse = Cards

export const getCard = async (): Promise<GetCardResponse> => {
  return fetchJson<GetCardResponse>(API_URL.CARD)
}
