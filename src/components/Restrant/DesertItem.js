import RegulerCard from "../ui/RegulerCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DesertItem(props) {
  return (
    <Card className="mt-3 text-center">
      <Card.Body> {props.name}</Card.Body>
    </Card>
  );
}

export default DesertItem;
