import { render, screen } from '@testing-library/react';
import { RecipeDetail } from './RecipeDetail';

describe('RecipeDetail', () => {
  it('renders the placeholder recipe details', () => {
    render(<RecipeDetail />);

    expect(screen.getByRole('heading', { name: 'Recipe Name' })).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Ingredients:')).toBeInTheDocument();
  });

  it('renders the Manage Recipe menu', () => {
    render(<RecipeDetail />);

    expect(screen.getByRole('button', { name: 'Manage Recipe' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'To Shopping List' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Edit Recipe' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Delete Recipe' })).toBeInTheDocument();
  });
});
