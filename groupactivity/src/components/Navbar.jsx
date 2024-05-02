// Import Link
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          YourHome
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link" to="/addproperty">
              Add a New Property
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
