import React from 'react'
import styled from 'styled-components'
import { useCardState } from '../../hooks/useCardState'
import { Cards } from '../../utils/types/Cards'
import { Header } from '../molecules/Header'
import { ItemCard } from '../organisms/ItemCard'

type Props = { cards: Cards } & ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={className}>
    <Header>React Example</Header>
    <main>
      <div className="item-container">
        {props.cards.map((e, i) => (
          <ItemCard key={i} card={e} />
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
  const [cards, setCards] = useCardState()

  return <StyledComponent {...props} cards={cards} />
}

export const TopPage = Container
