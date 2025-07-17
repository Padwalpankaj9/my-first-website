import { render, screen } from '@testing-library/react';
import App from './App';

test('renders call-to-action button', () => {
  render(<App />);
  const ctaButton = screen.getByText('Learn More About Me');
  expect(ctaButton).toBeInTheDocument();
});
