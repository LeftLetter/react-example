import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'

// input要素が本来持つ属性を受け付ける
type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', ...attributes }) => (
  <input
    className={cns('common-input', className)}
    data-testid="common-input" // テスト用
    {...attributes}
  />
)

const StyledComponent = styled(Component)`
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
`

export const CommonInput = StyledComponent
