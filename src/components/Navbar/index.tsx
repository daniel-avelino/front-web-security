import './styles.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary main-nav">
      <div className="container-fluid"> 
        <a href="link" className="nav-title">
          <h4>Covid</h4>
        </a>
        <div className = "collapse navbar-collapse">
          <ul className = "navbar-nav offset-sm-2 main-menu">
            <li>
              <a href="link" className="selected">HOME</a>
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
