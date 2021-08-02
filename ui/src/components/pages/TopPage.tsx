import React from 'react'
import styled from 'styled-components'
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
  // const [cards, setCards] = useCardState()
  const cards: Cards = [
    {
      id: '0',
      title: 'Very Long Long Long Long Long Long Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]

  return <StyledComponent {...props} cards={cards} />
}

export const TopPage = Container
