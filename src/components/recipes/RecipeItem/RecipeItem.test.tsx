import { render, screen } from '@testing-library/react';
import { RecipeItem } from './RecipeItem';

describe('RecipeItem', () => {
  const recipe = { name: 'Pasta', description: 'Tasty noodles', imagePath: 'https://example.com/pasta.jpg' };

  it('renders the recipe name and description', () => {
    render(<RecipeItem recipe={recipe} />);

    expect(screen.getByRole('heading', { name: 'Pasta' })).toBeInTheDocument();
    expect(screen.getByText('Tasty noodles')).toBeInTheDocument();
  });

  it('renders the recipe image with the name as alt text', () => {
    render(<RecipeItem recipe={recipe} />);

    const image = screen.getByRole('img', { name: 'Pasta' });
    expect(image).toHaveAttribute('src', 'https://example.com/pasta.jpg');
    expect(image).toHaveStyle({ maxHeight: '50px' });
  });
});
