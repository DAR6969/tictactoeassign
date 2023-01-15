import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import ActionButton from './components/ActionButton/ActionButton';
import Player from './components/Player/Player'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rock Paper Scissors/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Action Button', ()=>{
  it('should render and have corresponding class', () => {
    render(<ActionButton />)
    const actionbutton = screen.getByRole('button')
    expect(actionbutton).toHaveClass('round-btn')
  })

  it('can be clicked and calls callback on click', () => {
    const mockClick = jest.fn()
    const {container} = render(<ActionButton testid="ActionButton" onActionSelected={mockClick}/>)
    const testbutton = getByTestId(container, "ActionButton")
    fireEvent.click(testbutton)
    expect(mockClick).toHaveBeenCalled()
  })
})

describe('Player Component Tile', ()=>{
  it('should render and have corresponding class', () => {
    render(<Player />)
    const player = screen.getByTestId("player")
    const score = screen.getByTestId("score")
    const action = screen.getByTestId("action")
    expect(player).toHaveClass('player')
    expect(score).toHaveClass('score')
    expect(action).toHaveClass('action')
  })
})
