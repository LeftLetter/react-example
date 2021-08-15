import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'
import { ItemForm } from '../utils/types/ItemForm'
import { useCard } from './useCard'

export const useItemForm = (): {
  methods: UseFormReturn<ItemForm>
  onSubmit: SubmitHandler<ItemForm>
} => {
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

  const methods = useForm<ItemForm>({
    defaultValues: { title: '', description: '' },
    resolver: yupResolver(schema),
  })
  const { setCards } = useCard()

  const onSubmit: SubmitHandler<ItemForm> = (data) => {
    ;(async () => {
      let isOK = true
      const response = await fetch('api/v1', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(() => {
        isOK = false
      })

      if (isOK && response instanceof Response) {
        const responseObj = await response.json()
        setCards(responseObj)
        methods.reset()
      }
    })()
  }

  return { methods, onSubmit }
}
