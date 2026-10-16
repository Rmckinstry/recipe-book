import { render, screen } from '@testing-library/react';
import { ShoppingList } from './ShoppingList';

describe('ShoppingList', () => {
  it('renders the default ingredients', () => {
    render(<ShoppingList />);

    expect(screen.getByText('Apples (5)')).toBeInTheDocument();
    expect(screen.getByText('Tomatoes (15)')).toBeInTheDocument();
  });

  it('renders the ingredients passed in', () => {
    render(<ShoppingList ingredients={[{ name: 'Flour', amount: 2 }]} />);

    expect(screen.getByText('Flour (2)')).toBeInTheDocument();
    expect(screen.queryByText('Apples (5)')).not.toBeInTheDocument();
  });

  it('renders the shopping edit form', () => {
    render(<ShoppingList />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Amount')).toBeInTheDocument();
  });
});
