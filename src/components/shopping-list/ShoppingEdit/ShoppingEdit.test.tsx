import { fireEvent, render, screen } from '@testing-library/react';
import { ShoppingEdit } from './ShoppingEdit';

describe('ShoppingEdit', () => {
  it('renders labelled name and amount inputs', () => {
    render(<ShoppingEdit />);

    expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Amount')).toHaveAttribute('type', 'text');
  });

  it('renders the Add, Delete, and Clear buttons', () => {
    render(<ShoppingEdit />);

    expect(screen.getByRole('button', { name: 'Add' })).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button', { name: 'Clear' })).toHaveAttribute('type', 'button');
  });

  it('prevents the native form submission so the page does not reload', () => {
    render(<ShoppingEdit />);

    const form = screen.getByRole('button', { name: 'Add' }).closest('form')!;
    const notPrevented = fireEvent.submit(form);

    expect(notPrevented).toBe(false);
  });
});
