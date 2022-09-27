import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import RestrantList from "../Restrant/RestrantList";
import DesertList from "../Restrant/DesertList";
import DrinkList from "../Restrant/DrinkList";

function RestrantPage() {
  const [key, setKey] = useState("one");

  return (
    <div className="pt-3">
      <Tabs
        id="controlled-tab-schedule"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mt-5"
      >
        <Tab eventKey="one" title="식사류">
          <RestrantList />
        </Tab>
        <Tab eventKey="two" title="간식류">
          <DesertList />
        </Tab>
        <Tab eventKey="three" title="주류">
          <DrinkList />
        </Tab>
        <Tab eventKey="four" title="추가">
          {/* <ScheduleAdd /> */}
        </Tab>
      </Tabs>
    </div>
  );
}

export default RestrantPage;
