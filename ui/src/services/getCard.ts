import { Cards } from '../types/Cards'
import { API_URL } from '../utils/const'
import { fetchJson } from '../utils/fetcher'

export const getCard = async (): Promise<Cards> => {
  return fetchJson<Cards>(API_URL.CARD)
}
