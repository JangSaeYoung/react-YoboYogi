import RestrantItem from "./RestrantItem";

const Food_DATA = [
  {
    id: "1",
    name: "전복내장죽",
    link: "",
  },
  {
    id: "2",
    name: "갈치 조림",
    link: "",
  },
  {
    id: "3",
    name: "흑돼지 삼겹살",
    link: "",
  },
  {
    id: "4",
    name: "제주 모듬회",
    link: "",
  },
  {
    id: "5",
    name: "제주 토속 메뉴",
    link: "",
  },
  {
    id: "6",
    name: "또",
    link: "",
  },
];

function RestrantList(props) {
  return (
    <div className=" p-2 pm-10 overflow-scroll">
      {Food_DATA.map((food) => (
        <RestrantItem key={food.id} name={food.name} />
      ))}
    </div>
  );
}

export default RestrantList;
