import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./MainNavigation.css";

function MainNavigation() {
  return (
    <Navbar bg="light" variant="light" className="fixed-top ">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand href="/" className="px-3">
          홈
        </Navbar.Brand>
        {/* <Nav>
            <Nav.Link href="/schedule" className="px-3">
              일정
            </Nav.Link>
            <Nav.Link href="/restrant" className="px-3">
              식당
            </Nav.Link>
            <Nav.Link href="/lendmark" className="px-3">
              방문지
            </Nav.Link>
            <Nav.Link href="/traveldata" className="px-3">
              여행 상자
            </Nav.Link>
          </Nav> */}
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
