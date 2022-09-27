import ScheduleCard from "../ui/ScheduleCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ScheduleItem(props) {
  return (
    <div className="d-flex align-items-center mb-3">
      <div
        className=" col-2 bg-primary text-light d-flex justify-content-center align-items-center m-1"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      >
        {props.status}
      </div>
      <div className="col-10 d-flex bg-light align-items-center p-2 rounded-8">
        <div className="col-10 d-flex flex-column ">
          <h5>{props.address}</h5>
          <span>{props.time}</span>
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;
