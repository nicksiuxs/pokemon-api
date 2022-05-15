import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render app', async () => {
    render(<App />);
    const linkElement = screen.getByText(/Contenido/i);
    expect(linkElement).toBeInTheDocument();
  });
});
