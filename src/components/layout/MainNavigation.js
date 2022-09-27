import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./MainNavigation.css";

function MainNavigation() {
  return (
    <Navbar bg="light" variant="light" className="fixed-top">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand href="/" className="px-3">
          홈
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
