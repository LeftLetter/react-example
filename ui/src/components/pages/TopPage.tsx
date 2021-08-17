import React from 'react'
import styled from 'styled-components'
import { CardContextProvider } from '../../contexts/cardContext'
import { cns } from '../../utils/common'
import { Header } from '../organisms/Header'
import { MainContents } from '../organisms/MainContents'

type Props = ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '' }) => (
  <div className={cns('top-page', className)}>
    <Header>React Example</Header>
    <CardContextProvider>
      <MainContents></MainContents>
    </CardContextProvider>
  </div>
)

export const StyledComponent = styled(Component)``

// ContainerとComponentで分割するため、Template層は不要
const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export const TopPage = Container
