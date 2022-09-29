import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BootstrapDatePickerComponent from "../ui/BootstrapDatePickerComponent";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function ScheduleAdd(props) {
  const navigate = useNavigate();

  const dateFormRef = useRef();
  const sortFormRef = useRef();
  const titleFormRef = useRef();
  const timeFormtRef = useRef();

  function addScheduleHandler(scheduleData) {
    fetch(
      "https://react-getting-started-8ab08-default-rtdb.firebaseio.com/schedules.json",
      {
        method: "POST",
        body: JSON.stringify(scheduleData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/schedule");
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const enteredDate = dateFormRef.current.value;
    const enteredSort = sortFormRef.current.value;
    const enteredTitle = titleFormRef.current.value;
    const enteredTime = timeFormtRef.current.value;

    const scheduleData = {
      date: enteredDate,
      status: enteredSort,
      title: enteredTitle,
      time: enteredTime,
    };

    console.log(scheduleData);
    addScheduleHandler(scheduleData);
  }

  return (
    <Form
      // onAddSchedule={addScheduleHandler}
      onSubmit={submitHandler}
      className="p-2"
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <BootstrapDatePickerComponent ref={dateFormRef} /> */}
        {/* <BootstrapDatePickerComponent /> */}
        <Form.Label>날짜</Form.Label>
        <Form.Select ref={dateFormRef} aria-label="Default select example">
          <option>날짜를 선택하세요</option>
          <option value="목">29일</option>
          <option value="금">30일</option>
          <option value="토">10월 1일</option>
        </Form.Select>
        <p></p>
        <Form.Label>분류</Form.Label>
        <Form.Select ref={sortFormRef} aria-label="Default select example">
          <option>일정 분류를 선택하세요</option>
          <option value="출발">출발</option>
          <option value="도착">도착</option>
          <option value="관광">관광</option>
          <option value="식사">식사</option>
          <option value="숙소">숙소</option>
          <option value="기타">기타</option>
        </Form.Select>

        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>일정 제목</Form.Label>
        <Form.Control
          type="text"
          ref={titleFormRef}
          placeholder="일정 제목을 작성하세요"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>일정 시간</Form.Label>
        <Form.Control
          type="text"
          ref={timeFormtRef}
          placeholder="일정 시간을 선택하세요"
        />
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
