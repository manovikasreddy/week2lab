const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <h1>User Information Dashboard</h1>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li><a href="#users">Users</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;