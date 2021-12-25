// src/mocks/handlers.js
import { rest } from 'msw'
import { URL } from '../utils/const'

const cards = [
  {
    id: '886497b8-2e76-7532-5616-1f8f416bc65b',
    title: '一番目',
    description: '一番目の説明',
  },
  {
    id: '68ec70e6-66f8-71a2-3bcf-d1e457cf25f7',
    title: '二番目',
    description: '二番目の説明',
  },
  {
    id: '054105c0-a2c6-930f-ec0b-5efde3b00bbc',
    title: '三番目',
    description: '三番目の説明',
  },
  {
    id: 'b7cf61f6-780c-45a5-7435-5a5e1c67260f',
    title: '四番目',
    description: '四番目の説明',
  },
  {
    id: '75962eae-c211-66a6-66d2-8682b96c206b',
    title: '五番目',
    description: '五番目の説明',
  },
]

export const handlers = [
  rest.get(URL.CARD, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cards))
  }),

  rest.post(URL.CARD, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
    )
  }),

  rest.delete(URL.CARD, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '75962eae-c211-66a6-66d2-8682b96c206b',
        title: '五番目',
        description: '五番目の説明',
      })
    )
  }),

  // テスト用
  rest.get(URL.TEST_JSON_200, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ res: 'test' }))
  }),
  rest.get(URL.TEST_JSON_400, (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ res: 'test' }))
  }),
  rest.get(URL.TEST_JSON_500, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ res: 'test' }))
  }),
  rest.get(URL.TEST_TEXT_200, (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('test'))
  }),
  rest.get(URL.TEST_TEXT_400, (req, res, ctx) => {
    return res(ctx.status(400), ctx.text('test'))
  }),
  rest.get(URL.TEST_TEXT_500, (req, res, ctx) => {
    return res(ctx.status(500), ctx.text('test'))
  }),
]
