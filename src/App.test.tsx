import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the header, recipes, and shopping list', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'Recipe Book' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'New Recipe' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'A Test Recipe' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recipe Name' })).toBeInTheDocument();
    expect(screen.getByText('Apples (5)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
});
