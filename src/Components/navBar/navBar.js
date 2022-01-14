import React from "react";
import "./style.css";
import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img className="logo1" src={logo1} />

          <img className="logo2" src={logo2} />

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
              className="nav"
            >
              <Nav.Link className="color" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="color1" href="#about">
                About Us
              </Nav.Link>
              <Nav.Link className="color1" href="#appointment">
                Appointment
              </Nav.Link>
              <Nav.Link className="color1" href="#contact">
                Contact
              </Nav.Link>

              <SearchOutlined className="search1" />
              <input className="place" type="text" placeholder="Search"></input>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
