import Card from "react-bootstrap/Card";

function RestrantItem(props) {
  return (
    <Card className="mt-3 text-center">
      <Card.Body> {props.name}</Card.Body>
    </Card>
  );
}

export default RestrantItem;
