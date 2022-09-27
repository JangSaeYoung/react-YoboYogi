/* eslint-disable jsx-a11y/alt-text */
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function TravleDataPage() {
  return (
    <div className="pt-3 mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>비행기 티켓 (김포출발 - 제주도착)</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/김포출.png"
              alt="비행기 티켓 사진"
              width={"100%"}
            ></img>
            <ListGroup className=" mt-2 mb-2">
              <ListGroup.Item>
                <strong>예약번호 (비회원구매)</strong>
                <br />
                <span>3710429</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>편명</strong>
                <br />
                <span>BX8041</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>티켓번호</strong> <br />
                <span>아빠: 123434-123124</span>
                <br />
                <span>엄마: 123434-123124</span>
              </ListGroup.Item>
            </ListGroup>
            <span>⭐️ 출발 1시간전에는 공항에 도착.</span> <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>비행기 티켓 (제주출발 - 김포도착)</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/제주출.png"
              alt="비행기 티켓 사진"
              width={"100%"}
            ></img>
            <ListGroup className="mt-2 mb-2">
              <ListGroup.Item>
                <strong>예약번호 (비회원구매)</strong>
                <br />
                <span>3710429</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>편명</strong>
                <br />
                <span>BX8010</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>티켓번호</strong> <br />
                <span>아빠: 123434-123124</span>
                <br />
                <span>엄마: 123434-123124</span>
              </ListGroup.Item>
            </ListGroup>
            <span>⭐️ 출발 1시간전에는 공항에 도착.</span> <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>렌트카</Accordion.Header>
          <Accordion.Body>
            <img
              src="./images/car.png"
              alt="렌트카 예약 사진"
              width={"100%"}
            ></img>
            <ListGroup className="mt-2 mb-2">
              <ListGroup.Item>
                <strong>예약번호 (롯데회원구매)</strong>
                <br />
                <span>2222508128</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>차명</strong>
                <br />
                <span>더 뉴 그랜져 2.5(G)가솔린</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>예약일</strong>
                <br />
                <span>2022.09.12</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>지점</strong>
                <br />
                <span>제주오토하우스</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>대여기간</strong>
                <br />
                <span>22.09.29(목) 09:50 ~ 22.10.01(토) 16:00</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>운전자 (면허증 필수)</strong>
                <br />
                <span>장동용</span>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>숙소 (트로피컬 하이드어웨이)</Accordion.Header>
          <Accordion.Body className="mb-5">
            <img
              src="./images/hotel.png"
              alt="호텔 예약 사진"
              width={"100%"}
            ></img>
            <ListGroup className="mt-2 mb-2">
              <ListGroup.Item>
                <strong>일정번호(호텔스닷컴 구매)</strong>
                <br />
                <span>72378289802003</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>고객명</strong>
                <br />
                <span>장동용 / 김지유</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>예약 일정</strong> <br />
                <span> 체크인: 22-09-29 (15:30 ~ 21:00까지 체크인)</span>
                <br />
                <span> 체크아웃: 2022-10-01 (11:00 체크아웃)</span>
              </ListGroup.Item>
            </ListGroup>
            <span>⭐️ 체크인 많이 늦을 경우에 호텔에 연락</span> <br />
            <span>⭐️ 체크인 많이 늦을 경우에 호텔에 연락</span> <br />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TravleDataPage;
