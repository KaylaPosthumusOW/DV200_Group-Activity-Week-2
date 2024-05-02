import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import PropertyCard from "../components/Card";
import Navbar from "../components/Navbar";
import heroHouseImg from "../assets/houseHero.png";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";

import propertyList from '../propertyList';

function HomePage() {
  let propertiesToLoad = [''];
  for (let i = 0; i < propertyList.length; i++) {
      propertiesToLoad[i] = propertyList[i].id;
  }

  function loadCards(ids) {
    // if
  }

  return (
    <div>
      {/* <Navbar /> */}
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
              <Button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Browse Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12">
            <h2 className="display-8 fw-bold lh-1 mb-3">All Properties</h2>
            <DropdownButton id="dropdown-basic-button" title="Filter Properties" className="mb-3">
              <Dropdown.Item href="#/action-1">1 Bedroom</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2 Bedrooms</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3 Bedrooms</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">1 Bathroom</Dropdown.Item>
              <Dropdown.Item href="#/action-5">2 Bathrooms</Dropdown.Item>
              <Dropdown.Item href="#/action-6">3+ Bathrooms</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-7">Price Below R1,000,000</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Price R1,000,000 - R5,000,000</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Price Above R5,000,000</Dropdown.Item>
            </DropdownButton>
            <Container>
              <Row>
                <Col>Test 1</Col>
                <Col>Test 2</Col>
                <Col>Test 3</Col>
                <Col>Test 4</Col>
              </Row>
            </Container>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[0]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[1]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[2]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[3]}></PropertyCard>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[4]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[5]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[6]}></PropertyCard>
              </div>
              <div className="col-3">
                <PropertyCard propertyID={propertiesToLoad[7]}></PropertyCard>
              </div>
            </div>
              
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
