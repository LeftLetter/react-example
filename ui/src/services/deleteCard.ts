import { API_URL } from '../utils/const'
import { fetchJson } from '../utils/fetcher'

export type DeleteCardResponse = {
  id: string
}

export const deleteCard = async (id: string): Promise<DeleteCardResponse> => {
  const params = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  }
  return fetchJson<DeleteCardResponse>(API_URL.CARD, params)
}
