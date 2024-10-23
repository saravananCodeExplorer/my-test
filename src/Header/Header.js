import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
function Header() {
  return (
    <>
           <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* Dropdown */}
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Drop
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SignUp</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Container>
      </Navbar>

    
    </>
  );
}

export default Header;