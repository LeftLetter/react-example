import { Cards } from '../types/Cards'
import { URL } from '../utils/const'
import { fetchJson } from '../utils/fetcher'

export const getCard = async (): Promise<Cards> => {
  return fetchJson<Cards>(URL.CARD)
}
