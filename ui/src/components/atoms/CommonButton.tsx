import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'

// button要素が本来持つ属性+クラス名+テキスト+テーマを受け付ける
type Props = JSX.IntrinsicElements['button'] & {
  className?: string
  children: React.ReactNode
  colorTheme?: 'primary' | 'secondary' | 'error'
}

const Component: React.VFC<Props> = ({
  className = '',
  children,
  colorTheme = 'primary',
  ...attributes
}) => (
  <button
    className={cns('common-button', colorTheme, className)}
    data-testid="common-button" // テスト用
    {...attributes}
  >
    {children}
  </button>
)

const StyledComponent = styled(Component)`
  &.common-button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: var(--color-sub);

    :disabled {
      background-color: var(--color-main-light);
      :hover {
        background-color: var(--color-main-light);
      }
    }
  }

  &.primary {
    background-color: var(--color-primary);
    :hover {
      background-color: var(--color-primary-dark);
    }
  }

  &.secondary {
    background-color: var(--color-secondary);
    :hover {
      background-color: var(--color-secondary-dark);
    }
  }

  &.error {
    background-color: var(--color-error);
    :hover {
      background-color: var(--color-error-dark);
    }
  }
`

export const CommonButton = StyledComponent
