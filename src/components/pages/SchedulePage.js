import ScheduleList from "../Schedules/ScheduleList";
import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import ScheduleAdd from "../Schedules/ScheduleAdd";

function SchedulePage() {
  const [key, setKey] = useState("one");

  return (
    <div className="pt-3">
      <Tabs
        id="controlled-tab-schedule"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 mt-5"
      >
        <Tab eventKey="one" title="29일 수요일">
          <ScheduleList />
        </Tab>
        <Tab eventKey="two" title="30일 목요일">
          <ScheduleList />
        </Tab>
        <Tab eventKey="three" title=" 1일 금요일">
          <ScheduleList />
        </Tab>
        {/* <Tab eventKey="four" title="추가">
          <ScheduleAdd />
        </Tab> */}
      </Tabs>
    </div>
  );
}

export default SchedulePage;
