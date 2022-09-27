import DesertItem from "./DesertItem";

const desert_DATA = [
  {
    id: "1",
    name: "음료",
    link: "",
  },
  {
    id: "2",
    name: "케이크",
    link: "",
  },
  {
    id: "3",
    name: "마카롱",
    link: "",
  },
  {
    id: "4",
    name: "빵",
    link: "",
  },
];

function DesertList(props) {
  return (
    <div className=" p-2 pm-10 overflow-scroll">
      {desert_DATA.map((desert) => (
        <DesertItem key={desert.id} name={desert.name} />
      ))}
    </div>
  );
}

export default DesertList;
