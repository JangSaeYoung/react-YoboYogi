import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./components/layout/Layout";

import Homepage from "./components/pages/Home/HomePage";
import SchedulePage from "./components/pages/SchedulePage";
import RestrantPage from "./components/pages/RestrantPage";
import LendmarkPage from "./components/pages/LendmarkPage";
import TravleDataPage from "./components/pages/TravleDataPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/restrant" element={<RestrantPage />} />
        <Route path="/lendmark" element={<LendmarkPage />} />
        <Route path="/traveldata" element={<TravleDataPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
