import ScheduleItem from "./ScheduleItem";

function ScheduleOneList(props) {
  return (
    <div className=" p-2 pm-10 overflow-scroll">
      {props.schedules &&
        props.schedules.map((schedule) => (
          <ScheduleItem
            key={schedule.id}
            id={schedule.id}
            date={schedule.date}
            status={schedule.status}
            title={schedule.title}
            time={schedule.time}
            address={schedule.title}
          />
        ))}
    </div>
  );
}

export default ScheduleOneList;
