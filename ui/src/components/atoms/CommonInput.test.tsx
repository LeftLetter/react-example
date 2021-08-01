import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Text } from './CommonInput.stories'

it('renders the text in the text state', () => {
  render(<Text {...Text.args} />)
  const element = screen.getByTestId('common-input') as HTMLInputElement
  expect(element.value).toBe('')
  fireEvent.change(element, { target: { value: 'test' } })
  expect(element.value).toBe('test')
})
