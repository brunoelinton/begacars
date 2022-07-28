import './styles.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4 className="teste">BEGA CARS</h4>
        </a>
        <div className="collapse navbar-collapse container-main-menu">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
