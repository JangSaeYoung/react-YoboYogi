import Card from "react-bootstrap/Card";

function LendmarkItem(props) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title> {props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.link}>지도보기</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LendmarkItem;
