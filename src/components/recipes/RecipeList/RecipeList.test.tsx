import { render, screen } from '@testing-library/react';
import { RecipeList, RECIPES } from './RecipeList';

describe('RecipeList', () => {
  it('renders the New Recipe button', () => {
    render(<RecipeList />);

    expect(screen.getByRole('button', { name: 'New Recipe' })).toBeInTheDocument();
  });

  it('renders the default recipes', () => {
    render(<RecipeList />);

    for (const recipe of RECIPES) {
      expect(screen.getByRole('heading', { name: recipe.name })).toBeInTheDocument();
      expect(screen.getByText(recipe.description)).toBeInTheDocument();
    }
  });

  it('renders one item per recipe passed in', () => {
    render(
      <RecipeList
        recipes={[
          { name: 'Pasta', description: 'Tasty', imagePath: 'pasta.jpg' },
          { name: 'Salad', description: 'Fresh', imagePath: 'salad.jpg' },
        ]}
      />,
    );

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Pasta' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Salad' })).toBeInTheDocument();
  });
});
