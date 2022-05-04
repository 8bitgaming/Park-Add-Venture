import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import AuthService from '../../utils/auth';



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
            <Nav.Link className="header-links" as={Link} to="/donation">
              Donation
            </Nav.Link>
            {AuthService.loggedIn()? (
              <>
              <Button onClick={AuthService.logout()}>Logout</Button>
              </>
            ) : (
              <>
            <Nav.Link key={0} className="header-links" as={Link} to="/Login">
              Login
            </Nav.Link>
            <Nav.Link key={1} className="header-links" as={Link} to="/Signup">
              Signup
            </Nav.Link>
            </>
            )}
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
