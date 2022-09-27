import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const spot_DATA = [
  {
    id: "1",
    name: "용머리해안",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "2",
    name: "산방산",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
];

function Spot() {
  return (
    <Row xs={2} md={2} className="g-1 mb-5">
      {spot_DATA.map((spot) => (
        <Col className="p-2">
          <Card>
            <Card.Img variant="top" src={spot.src} />
            <Card.Body>
              <Card.Title> {spot.name}</Card.Title>
              <Card.Text>{spot.description}</Card.Text>
              <Card.Link href={spot.link}>지도보기</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Spot;
