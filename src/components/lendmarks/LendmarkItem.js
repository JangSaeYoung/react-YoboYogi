import RegulerCard from "../ui/RegulerCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function LendmarkItem(props) {
  return (
    // <Card className="mt-3 text-center">
    //   <Card.Body> {props.name}</Card.Body>
    // </Card>

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
