import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../molecules/Header'

type Props = {
  className?: string
}

type ContainerProps = Props

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={className}>
    <Header>React Example</Header>
    <main>
      <div className="item-container">
        <div className="item-card">aaa</div>
      </div>
    </main>
  </div>
)

const StyledComponent = styled(Component)`
  > main {
    padding-top: 60px;

    > .item-container {
      display: flex;
      padding: 20px;

      > .item-card {
        width: 300px;
        height: 300px;
        border: 2px solid var(--color-main);
        border-radius: 10px;
        padding: 10px;
      }
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  // const [words, setWords] = useState<WordsType>([])
  useEffect(() => {
    ;(async () => {
      const response = await fetch('api/v1')
      const data = await response.json()
      // setWords(data)
    })()
  }, [])

  return <StyledComponent {...props} />
}

export const TopPage = Container
