import { API_URL, ERROR_MESSAGE } from './const'
import { fetchJson, fetchText } from './fetcher'

describe('fetchJsonのテスト', () => {
  type Response = {
    res: string
  }
  const request = { req: 'test' }
  const expectedResponse = { res: 'test' }

  it('200でjsonが返ってきた時に正常にレスポンスを取得できることを確認する', async () => {
    const response = await fetchJson<Response>(
      `${API_URL.TEST_JSON_200}?${new URLSearchParams(request)}`
    )
    expect(response).toStrictEqual(expectedResponse)
  })

  it('400でjsonが返ってきた時にエラーとなることを確認する', async () => {
    // 例外が1件スローされること
    expect.assertions(1)
    // エラーメッセージが正しいこと
    try {
      await fetchJson<Response>(
        `${API_URL.TEST_JSON_400}?${new URLSearchParams(request)}`
      )
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toMatch(ERROR_MESSAGE.UNEXPECTED_ERROR)
      }
    }
  })

  it('500でjsonが返ってきた時にエラーとなることを確認する', async () => {
    // 例外が1件スローされること
    expect.assertions(1)
    // エラーメッセージが正しいこと
    try {
      await fetchJson<Response>(
        `${API_URL.TEST_JSON_500}?${new URLSearchParams(request)}`
      )
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toMatch(ERROR_MESSAGE.UNEXPECTED_ERROR)
      }
    }
  })

  it('textが返ってきた時にエラーとなることを確認する', async () => {
    // 例外が1件スローされること
    expect.assertions(1)
    // エラーメッセージが正しいこと
    try {
      await fetchJson<Response>(
        `${API_URL.TEST_TEXT_200}?${new URLSearchParams(request)}`
      )
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toMatch(ERROR_MESSAGE.CANNOT_CONVERT_TO_JSON)
      }
    }
  })
})

describe('fetchTextのテスト', () => {
  const request = { req: 'test' }
  const expectedResponse = 'test'

  it('200でtextが返ってきた時に正常にレスポンスを取得できることを確認する', async () => {
    const response = await fetchText(
      `${API_URL.TEST_TEXT_200}?${new URLSearchParams(request)}`
    )
    expect(response).toStrictEqual(expectedResponse)
  })

  it('400でtextが返ってきた時にエラーとなることを確認する', async () => {
    // 例外が1件スローされること
    expect.assertions(1)
    // エラーメッセージが正しいこと
    try {
      await fetchText(
        `${API_URL.TEST_TEXT_400}?${new URLSearchParams(request)}`
      )
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toMatch(ERROR_MESSAGE.UNEXPECTED_ERROR)
      }
    }
  })

  it('500でtextが返ってきた時にエラーとなることを確認する', async () => {
    // 例外が1件スローされること
    expect.assertions(1)
    // エラーメッセージが正しいこと
    try {
      await fetchText(
        `${API_URL.TEST_TEXT_500}?${new URLSearchParams(request)}`
      )
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toMatch(ERROR_MESSAGE.UNEXPECTED_ERROR)
      }
    }
  })
})
