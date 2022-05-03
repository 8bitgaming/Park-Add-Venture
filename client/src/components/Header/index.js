import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Park-Add-Venture logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="header-links" as={Link} to="/">
              Parks
            </Nav.Link>
            <Nav.Link className="header-links" href="#link">
              Profile
            </Nav.Link>
            <Nav.Link className="header-links" as={Link} to="/myparks"
            >My Parks
            </Nav.Link>
            <Nav.Link className="header-links" href="/donation">
              Donation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
