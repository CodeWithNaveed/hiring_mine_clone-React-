import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';



function ColorSchemesExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <LogoImage src="./images/Hiring_Mine_Logo.png" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{ marginLeft: "auto" }}>
            <Nav.Link href="#home" style={{ color: "black" }}>About Us</Nav.Link>
            <Nav.Link href="#link" style={{ color: "black" }}>People</Nav.Link>
            <Nav.Link href="#about" style={{ color: "black" }}>Jobs</Nav.Link>
            <Nav.Link href="#about" style={{ color: "black" }}>Login</Nav.Link>
            <Nav.Link href="#about" style={{ color: "black" }}>Join Now</Nav.Link>
            <Nav.Link href="#about"><P>Employee / Post Job</P></Nav.Link>
          </Nav>

          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
          />
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;

// Styled component for the logo image
const LogoImage = styled.img`
  width: 186.35px;
  height: 36px;
  margin-right: 10px;
`;

const P = styled.p`
  color: #6851ff;
`