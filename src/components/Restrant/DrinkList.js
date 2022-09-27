import DrinkItem from "./DrinkItem";

const drink_DATA = [
  {
    id: "1",
    name: "한라산 소주",
    link: "",
  },
  {
    id: "2",
    name: "제주 와인",
    link: "",
  },
  {
    id: "3",
    name: "주제에일",
    link: "",
  },
  {
    id: "4",
    name: "또",
    link: "",
  },
];

function DrinkList(props) {
  return (
    <div className=" p-2 pm-10 ">
      {drink_DATA.map((drink) => (
        <DrinkItem key={drink.id} name={drink.name} />
      ))}
    </div>
  );
}

export default DrinkList;
