import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import LendmarkList from "../lendmarks/LendmarkList";

function LendmarkPage() {
  const [key, setKey] = useState("one");

  return (
    <div className="pt-3">
      <Tabs
        id="controlled-tab-schedule"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 mt-5 d-flex justify-content-center"
      >
        <Tab eventKey="one" title="절">
          <LendmarkList />
        </Tab>
        <Tab eventKey="two" title="관광">
          {/* <ScheduleList /> */}
        </Tab>
        <Tab eventKey="three" title="휴양지">
          {/* <ScheduleList /> */}
        </Tab>
        <Tab eventKey="four" title="추가">
          {/* <ScheduleAdd /> */}
        </Tab>
      </Tabs>
    </div>
  );
}

export default LendmarkPage;
