// import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { useRef } from "react";

function BootstrapDatePickerComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="dob">
            <Form.Label>날짜</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Date of Birth"
              // ref={props.dateFormRef}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default BootstrapDatePickerComponent;
