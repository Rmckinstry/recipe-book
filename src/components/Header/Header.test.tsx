import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

function getCollapsible(container: HTMLElement) {
  return container.querySelector('.navbar-collapse')!;
}

describe('Header', () => {
  it('renders the brand, nav links, and manage menu', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Recipe Book' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Recipes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Shopping List' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Manage' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Save Data' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Fetch Data' })).toBeInTheDocument();
  });

  it('renders three icon bars in the toggle button', () => {
    render(<Header />);

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
    expect(toggle.querySelectorAll('.icon-bar')).toHaveLength(3);
  });

  it('starts collapsed and toggles open and closed on click', async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' });

    expect(getCollapsible(container)).toHaveClass('collapse');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(getCollapsible(container)).not.toHaveClass('collapse');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggle);
    expect(getCollapsible(container)).toHaveClass('collapse');
  });

  it('collapses the menu when the window is resized', async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);

    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }));
    expect(getCollapsible(container)).not.toHaveClass('collapse');

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(getCollapsible(container)).toHaveClass('collapse');
  });

  it('removes the resize listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Header />);

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    removeSpy.mockRestore();
  });
});
