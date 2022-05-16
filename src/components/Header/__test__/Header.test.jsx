import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
	it('should render component', async () => {
		render(<Header />);
		const headerElement = screen.getByText(/Pokémon api/i);
		expect(headerElement).toBeInTheDocument();
	});
});
