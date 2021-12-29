const API_BASE = `${process.env.REACT_APP_API_URL}/api/v1/`

export const API_URL = {
  CARD: `${API_BASE}card`,
  // テスト用
  TEST_JSON_200: `${API_BASE}test/json/200`,
  TEST_JSON_400: `${API_BASE}test/json/400`,
  TEST_JSON_500: `${API_BASE}test/json/500`,
  TEST_TEXT_200: `${API_BASE}test/text/200`,
  TEST_TEXT_400: `${API_BASE}test/text/400`,
  TEST_TEXT_500: `${API_BASE}test/text/500`,
}

export const ERROR_MESSAGE = {
  UNEXPECTED_ERROR: '想定外のエラーが発生しました。',
  CANNOT_CONVERT_TO_JSON: 'jsonに変換できません',
  CANNOT_CONVERT_TO_TEXT: 'textに変換できません',
  // プログラム内部用
  USE_CONTEXTS_INNER_PROVIDER: 'useContextはProviderの中で使用してください。',
  UNDEFINED_ACTION_TYPE: 'その名前のActionが存在しません。',
}
