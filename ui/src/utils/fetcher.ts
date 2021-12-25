import { ERROR_MESSAGES } from './const'

// jsonを取得するfetch APIラッパー
export const fetchJson = async <T>(
  url: RequestInfo,
  params?: RequestInit
): Promise<T> => {
  const rawResponse = await fetch(url, params)

  // ステータスコードが2XXの時はjsonを返す
  if (rawResponse.ok) {
    try {
      const json = await rawResponse.json()
      return json
    } catch (error) {
      throw Error(ERROR_MESSAGES.CANNOT_CONVERT_TO_JSON)
    }
  }

  // ステータスコードが2XX以外の場合はステータスに応じて例外をスロー
  throw Error(createHttpErrorMessage(rawResponse.status))
}

// textを取得するfetch APIラッパー
export const fetchText = async (
  url: RequestInfo,
  params?: RequestInit
): Promise<string> => {
  const rawResponse = await fetch(url, params)

  // ステータスコードが2XXの時はtextを返す
  if (rawResponse.ok) {
    try {
      const text = await rawResponse.text()
      return text
    } catch (error) {
      throw Error(ERROR_MESSAGES.CANNOT_CONVERT_TO_TEXT)
    }
  }

  // ステータスコードが2XX以外の場合はステータスに応じて例外をスロー
  throw Error(createHttpErrorMessage(rawResponse.status))
}

export const createHttpErrorMessage = (status: number): string => {
  switch (status) {
    default:
      return ERROR_MESSAGES.UNEXPECTED_ERROR
  }
}
