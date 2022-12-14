import Container from "react-bootstrap/Container";
import * as React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function HomePage() {
  return (
    <div className="mt-5 p-2">
      <div className="pb-2"></div>
      <Alert variant="success">
        <Alert.Heading>이번 여행은 어디인가요?</Alert.Heading>
        <p>여행때만큼은 평소와 다른 일과를 보내세요!</p>
        <hr />
        <p className="mb-0">하지만 안전운전은 잊지마세요!</p>
      </Alert>
      <Card className="mb-5" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>제주도 여행</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            9월 29일 수요일 ~ 10월 1일 금요일
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="/schedule">일정 보기</Card.Link>
        </Card.Body>
      </Card>
      <Form>
        <div className="mb-3">
          <Form.Check type={"checkbox"}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label className="text-dark">
              <h2>운전면허증</h2>
            </Form.Check.Label>
            <Form.Control.Feedback type="valid">
              렌트 시 절대 필요
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      </Form>
    </div>
  );
}
export default HomePage;
