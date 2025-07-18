import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact section', () => {
  render(<App />);
  const contactHeading = screen.getByText(/contact me/i);
  expect(contactHeading).toBeInTheDocument();
test('renders heading and button', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /hello, i'm pankaj/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /learn more about me/i })
  ).toBeInTheDocument();
});
