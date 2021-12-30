import { ItemForm } from '../types/forms/ItemForm'
import { API_URL } from '../utils/const'
import { fetchJson } from '../utils/fetcher'

export type PostCardResponse = {
  id: string
}

export const postCard = async (data: ItemForm): Promise<PostCardResponse> => {
  const params = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetchJson<PostCardResponse>(API_URL.CARD, params)
}
