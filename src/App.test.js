import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokemon api', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contenido/i);
  expect(linkElement).toBeInTheDocument();
});
