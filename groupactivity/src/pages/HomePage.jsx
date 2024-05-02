import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import PropertyCard from "../components/Card";
import CardGroup from "../components/CardGroup";
import Navbar from "../components/Navbar";
import heroHouseImg from "../assets/houseHero.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={heroHouseImg}
              alt="house"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Find your ideal home</h1>
            <p className="lead">
              Explore a wide range of properties tailored to your lifestyle. Start your journey to
              finding the perfect place today!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Browse Properties
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12">
            <h2 className="display-8 fw-bold lh-1 mb-3">All Properties</h2>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Container>
              <Row>
                <Col>Test 1</Col>
                <Col>Test 2</Col>
                <Col>Test 3</Col>
                <Col>Test 4</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
