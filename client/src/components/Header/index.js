import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Park-Add-Venture logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="header-links" href="#link">
              Parks
            </Nav.Link>
            <Nav.Link className="header-links" href="#link">
              Profile
            </Nav.Link>
            <Nav.Link className="header-links" href="#link">
              My Parks
            </Nav.Link>
            <Nav.Link className="header-links" href="#link">
              Get Pass
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
