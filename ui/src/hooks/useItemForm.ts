import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'
import { CardUpdateContext } from '../contexts/cardContext'
import { CARD_ACTION_ADD } from '../reducers/itemReducer'
import { postCard } from '../services/postCard'
import { ItemForm } from '../types/forms/ItemForm'
import { ERROR_MESSAGE } from '../utils/const'

export const useItemForm = (): {
  methods: UseFormReturn<ItemForm>
  onSubmit: SubmitHandler<ItemForm>
} => {
  // バリデーション設定
  const schema = yup.object({
    title: yup
      .string()
      .max(20, 'Please enter the title within 20 characters.')
      .required('Please enter the title.'),
    description: yup
      .string()
      .max(100, 'Please enter the description within 100 characters.')
      .required('Please enter the description.'),
  })

  // フォームの本体
  const methods = useForm<ItemForm>({
    defaultValues: { title: '', description: '' },
    resolver: yupResolver(schema),
  })

  const dispatch = useContext(CardUpdateContext)

  // ContextをProvider外で呼び出した場合はエラー
  if (dispatch === undefined) {
    throw new Error(ERROR_MESSAGE.USE_CONTEXTS_INNER_PROVIDER)
  }

  // フォーム送信時に実行される関数
  const onSubmit: SubmitHandler<ItemForm> = (data) => {
    ;(async () => {
      try {
        const res = await postCard(data)
        dispatch({ type: CARD_ACTION_ADD, card: { ...data, id: res.id } })
        // フォーム入力状態をリセット
        methods.reset()
      } catch (error) {
        // TODO: エラーメッセージをセット
        return
      }
    })()
  }

  return { methods, onSubmit }
}
