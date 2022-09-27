import ScheduleItem from "./ScheduleItem";

const DUMMY_DATA = [
  {
    id: "1",
    status: "출발",
    title: "김포공항",
    time: "8시 15분",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "2",
    status: "도착",
    title: "제주공항",
    time: "9시 25분",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "3",
    status: "렌트",
    title: "제주 오토하우스",
    time: "9시 50분",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "4",
    status: "점심",
    title: "제주 시내 예정",
    time: "12시 경",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "5",
    status: "관광",
    title: "절",
    time: "14시",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "6",
    status: "숙소",
    title: "트러피컬하이드어웨이 체크인",
    time: "15시 30분",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "7",
    status: "관광",
    title: "제주시 / 서귀포시",
    time: "17시",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "8",
    status: "저녁",
    title: "저녁 식사",
    time: "18시",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function ScheduleList(props) {
  return (
    <div className=" p-2 pm-10 overflow-scroll">
      {DUMMY_DATA.map((schedule) => (
        <ScheduleItem
          key={schedule.id}
          id={schedule.id}
          status={schedule.status}
          title={schedule.title}
          time={schedule.time}
          address={schedule.title}
          description={schedule.description}
        />
      ))}
    </div>
  );
}

export default ScheduleList;
