import Card from "react-bootstrap/Card";

function RegulerCard(props) {
  return (
    <Card className="d-flex flex-row p-1 mb-3 align-items-center">
      {props.children}
    </Card>
  );
}

export default RegulerCard;
