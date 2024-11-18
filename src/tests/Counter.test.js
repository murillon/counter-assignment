// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const headingElement = screen.getByText(/Counter/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // ACT
  userEvent.click(screen.getByText("+"));

  // ASSERT
  expect(screen.getByTestId("count")).toHaveTextContent("1");

  // ACT
  userEvent.click(screen.getByText("+"));

  // ASSERT
  expect(screen.getByTestId("count")).toHaveTextContent("2");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  // ACT
  userEvent.click(screen.getByText("-"));

  // ASSERT
  expect(screen.getByTestId("count")).toHaveTextContent("-1");

  // ACT
  userEvent.click(screen.getByText("-"));

  // ASSERT
  expect(screen.getByTestId("count")).toHaveTextContent("-2");
});
