import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Cards } from '../../utils/types/Cards'
import { Header } from '../molecules/Header'
import { ItemCard } from '../organisms/ItemCard'

type Props = ContainerProps

type ContainerProps = {
  className?: string
  cards: Cards
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={className}>
    <Header>React Example</Header>
    <main>
      <div className="item-container">
        {props.cards.map((e, i) => (
          <ItemCard key={i} card={e}></ItemCard>
        ))}
      </div>
    </main>
  </div>
)

export const StyledComponent = styled(Component)`
  > main {
    padding-top: 60px;

    > .item-container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  useEffect(() => {
    ;(async () => {
      // データ取得処理を書く
      // const response = await fetch('api/v1')
      // const data = await response.json()
    })()
  }, [])

  return <StyledComponent {...props} />
}

export const TopPage = Container
