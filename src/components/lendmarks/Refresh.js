import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const refresh_DATA = [
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

function Refresh() {
  return (
    <Row xs={2} md={2} className="g-1 mb-5">
      {refresh_DATA.map((refresh) => (
        <Col className="p-2">
          <Card>
            <Card.Img variant="top" src={refresh.src} />
            <Card.Body>
              <Card.Title> {refresh.name}</Card.Title>
              <Card.Text>{refresh.description}</Card.Text>
              <Card.Link href={refresh.link}>지도보기</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Refresh;
