import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavigation.css";

function MainFooter() {
  return (
    <Navbar bg="light" variant="light" className="fixed-bottom" height="5rem">
      <Container className="d-flex  justify-content-center">
        <Nav>
          <Nav.Link href="/schedule" className="px-4">
            일정
          </Nav.Link>
          <Nav.Link href="/restrant" className="px-4">
            식당
          </Nav.Link>
          <Nav.Link href="/lendmark" className="px-4">
            방문지
          </Nav.Link>
          <Nav.Link href="/traveldata" className="px-4">
            여행 상자
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainFooter;
