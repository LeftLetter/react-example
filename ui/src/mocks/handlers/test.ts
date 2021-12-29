// テスト用モックAPI
import { rest } from 'msw'
import { API_URL } from '../../utils/const'

export const test = [
  rest.get(API_URL.TEST_JSON_200, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ res: 'test' }))
  }),
  rest.get(API_URL.TEST_JSON_400, (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ res: 'test' }))
  }),
  rest.get(API_URL.TEST_JSON_500, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ res: 'test' }))
  }),
  rest.get(API_URL.TEST_TEXT_200, (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('test'))
  }),
  rest.get(API_URL.TEST_TEXT_400, (req, res, ctx) => {
    return res(ctx.status(400), ctx.text('test'))
  }),
  rest.get(API_URL.TEST_TEXT_500, (req, res, ctx) => {
    return res(ctx.status(500), ctx.text('test'))
  }),
]
