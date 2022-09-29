import ScheduleItem from "./ScheduleItem";

function ScheduleTwoList(props) {
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
            description={schedule.description}
          />
        ))}
    </div>
  );
}

export default ScheduleTwoList;
