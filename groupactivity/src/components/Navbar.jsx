// Import Link
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          IdealHomes
        </Link>

        <Link class="nav-link-home" to="/">
          Home
        </Link>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link-addproperty" to="/addproperty">
              Add a Property
            </Link>

            <Link class="nav-link-details" to="/PropertyDetailsPage">
              Property Details
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
