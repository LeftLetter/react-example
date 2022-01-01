import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { CommonText } from './CommonText'

type Props = {
  colorTheme?: 'normal' | 'sub'
  size?: 'small' | 'medium' | 'large'
  textClassName?: string
} & LinkProps &
  React.RefAttributes<HTMLAnchorElement>

const Component: React.VFC<Props> = ({
  className = '',
  textClassName = '',
  children,
  colorTheme = 'sub',
  size = 'medium',
  ...attributes
}) => (
  <Link
    className={cns('page-link', className)}
    data-testid="page-link" // テスト用
    {...attributes}
  >
    <CommonText className={cns('link-text', textClassName, colorTheme, size)}>
      {children}
    </CommonText>
  </Link>
)

export const StyledComponent = styled(Component)`
  &.page-link {
    text-decoration: none;

    > .link-text {
      :hover {
        color: skyblue;
      }
    }
  }
`

export const PageLink = StyledComponent
