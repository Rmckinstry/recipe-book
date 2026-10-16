import { useEffect, useState } from 'react';
import './Header.css';

export function Header() {
  const [collapsed, setCollapsed] = useState(true);

  // Matches the original behavior: any window resize collapses the mobile menu.
  useEffect(() => {
    const collapse = () => setCollapsed(true);
    window.addEventListener('resize', collapse);
    return () => window.removeEventListener('resize', collapse);
  }, []);

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            aria-label="Toggle navigation"
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((c) => !c)}
          >
            {[1, 2, 3].map((bar) => (
              <span key={bar} className="icon-bar"></span>
            ))}
          </button>
          <a href="#" className="navbar-brand">Recipe Book</a>
        </div>
        <div className={collapsed ? 'navbar-collapse collapse' : 'navbar-collapse'}>
          <ul className="nav navbar-nav">
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Shopping List</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">Manage <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Save Data</a></li>
                <li><a href="#">Fetch Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
