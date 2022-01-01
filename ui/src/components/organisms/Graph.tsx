import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'

type Props = ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={cns('graph', className)}></div>
)

export const StyledComponent = styled(Component)`
  &.graph {
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export const Graph = Container
