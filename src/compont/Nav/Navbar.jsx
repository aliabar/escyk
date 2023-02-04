import { Button, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import * as Scroll from 'react-scroll';
import logo from "../../../src/assets/logo.png";
import {Link} from 'react-scroll'
function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link  to="hre" spy={true} smooth={true} offset={50} duration={500}><Nav.Link className="a">Home</Nav.Link> </Link>
            <Link  to="abut" spy={true} smooth={true} offset={50} duration={500} ><NavLink className="a">abut us</NavLink></Link>
            <Link  to="explore food" spy={true} smooth={true} offset={50} duration={500} > <NavLink className="a">explore food </NavLink></Link>
            <Link  to="Review" spy={true} smooth={true} offset={50} duration={500} > <NavLink className="a">Review</NavLink></Link>
            <Link  to="FAQ" spy={true} smooth={true} offset={50} duration={500} > <NavLink className="a">fag</NavLink></Link>
          </Nav>
          <Button variant="outline-danger " >+218 0944521536</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;