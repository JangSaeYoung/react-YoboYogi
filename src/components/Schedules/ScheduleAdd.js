import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BootstrapDatePickerComponent from "../ui/BootstrapDatePickerComponent";
// import TimePicker from "react-bootstrap-time-picker";

function ScheduleAdd() {
  return (
    <Form className="p-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <BootstrapDatePickerComponent />
        <p></p>
        <Form.Label>분류</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>일정 분류를 선택하세요</option>
          <option value="1">출발</option>
          <option value="2">도착</option>
          <option value="3">관광</option>
          <option value="4">식사</option>
          <option value="5">숙소</option>
          <option value="6">기타</option>
        </Form.Select>

        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>일정 제목</Form.Label>
        <Form.Control type="text" placeholder="일정 제목을 작성하세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>일정 시간</Form.Label>
        {/* <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={this.handleTime}
          value={this.state.time}
        /> */}
        <Form.Control type="text" placeholder="일정 시간을 선택하세요" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mt-3"
        style={{ width: "100%" }}
      >
        일정 등록
      </Button>
    </Form>
  );
}

export default ScheduleAdd;
