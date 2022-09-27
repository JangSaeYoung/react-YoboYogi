import LendmarkItem from "./LendmarkItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const lendmark_DATA = [
  {
    id: "1",
    name: "관음사",
    src: "./images/관음사.png",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "2",
    name: "용머리해안",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "3",
    name: "산방산",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
  {
    id: "4",
    name: "또 어디",
    src: "./images/돌하르방.jpeg",
    description: "제주시내 위치",
    link: "https://naver.me/5mYgfOVM",
  },
];

function LendmarkList(props) {
  return (
    // <div className=" p-2 pm-10 overflow-scroll">
    //   {lendmark_DATA.map((lendmark) => (
    //     <LendmarkItem key={lendmark.id} name={lendmark.name} />
    //   ))}
    // </div>

    <Row>
      <Col>
        {lendmark_DATA.map((lendmark) => (
          <LendmarkItem
            key={lendmark.id}
            name={lendmark.name}
            src={lendmark.src}
            description={lendmark.description}
            link={lendmark.link}
          />
        ))}
      </Col>
    </Row>
  );
}

export default LendmarkList;
