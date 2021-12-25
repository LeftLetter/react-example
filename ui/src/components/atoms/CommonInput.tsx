import React from 'react'
import {
  ControllerRenderProps,
  Path,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import styled from 'styled-components'
import { cns } from '../../utils/common'

type Props<T> = JSX.IntrinsicElements['input'] & {
  className?: string
  field: ControllerRenderProps<T, Path<T>>
}

type ContainerProps<T> = JSX.IntrinsicElements['input'] &
  UseControllerProps<T> & {
    className?: string
  }

const Component = <T,>({ className = '', field, ...attributes }: Props<T>) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <input
    className={cns('common-input', className)}
    data-testid="common-input" // テスト用
    {...field}
    {...attributes}
  />
)

export const StyledComponent = styled(Component)`
  &.common-input {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--color-main);
    color: var(--color-main);

    :disabled {
      background-color: var(--color-main-light);
    }
  }
` as typeof Component

const Container = <T,>({
  className = '',
  ...attributes
}: ContainerProps<T>): JSX.Element => {
  const { field } = useController(attributes)

  return (
    <StyledComponent<T> className={className} field={field} {...attributes} />
  )
}

export const CommonInput = Container
