import ScheduleList from "../Schedules/ScheduleList";
import ScheduleOneList from "../Schedules/ScheduleOneList";
import ScheduleTwoList from "../Schedules/ScheduleOneList";

import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";
import ScheduleAdd from "../Schedules/ScheduleAdd";

function SchedulePage(props) {
  const [key, setKey] = useState("one");
  const [loadedSchedules, setLoadedSchedules] = useState([]);
  const [oneDay, setOneDay] = useState([]);
  const [twoDay, setTwoDay] = useState([]);
  const [threeDay, setThreeDay] = useState([]);

  useEffect(() => {
    // setIsLoading(true);

    fetch(
      "https://react-getting-started-8ab08-default-rtdb.firebaseio.com/schedules.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const schedules = [];
        // const schedulesFri = [];

        for (const key in data) {
          const schedule = {
            id: key,
            ...data[key],
          };

          schedules.push(schedule);
        }

        // setIsLoading(false);
        setLoadedSchedules(schedules);
      });
  }, []);

  useEffect(() => {
    // setIsLoading(true);

    fetch(
      "https://react-getting-started-8ab08-default-rtdb.firebaseio.com/schedules.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const oneDayList = loadedSchedules.filter((data) => {
          return data.date === "목";
        });
        setOneDay(oneDayList);

        const twoDayList = loadedSchedules.filter((data) => {
          return data.date === "금";
        });

        setTwoDay(twoDayList);

        const threeDayList = loadedSchedules.filter((data) => {
          return data.date === "토";
        });

        setThreeDay(threeDayList);
      });
  }, [loadedSchedules]);

  return (
    <div className="pt-3">
      <Tabs
        id="controlled-tab-schedule"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 mt-5"
      >
        <Tab eventKey="one" title="29일 목요일">
          {/* <ScheduleList schedules={loadedSchedules} /> */}
          <ScheduleList schedules={oneDay} />
        </Tab>
        <Tab eventKey="two" title="30일 금요일">
          <ScheduleOneList schedules={twoDay} />
        </Tab>
        <Tab eventKey="three" title=" 1일 토요일">
          <ScheduleTwoList schedules={threeDay} />
        </Tab>
        <Tab eventKey="four" title="추가">
          <ScheduleAdd />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SchedulePage;
