import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-title">
          <h4>Covid</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggler-navbar"
          aria-controls="toggler-navbar"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggler-navbar">
          <ul className="navbar-nav offset-sm-2 main-menu">
            <li>
              <a href="link" className="selected">
                HOME
              </a>
            </li>
            <li>
              <a href="link">CASES</a>
            </li>
            <li>
              <a href="link">VACCINES</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
