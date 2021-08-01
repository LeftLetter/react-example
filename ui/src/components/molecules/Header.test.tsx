import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Default } from './Header.stories'

it('renders the header in the default state', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('header')).toHaveTextContent('React Example')
})
