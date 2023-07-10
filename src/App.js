import React, { useState, useEffect } from "react";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Content from "./components/Content.js";
import { data } from "./data/data.js";
const App = (props) => {
  return (
    <>
      <TopNavBar />
      <Content data={data} />
      <BottomNavBar />
    </>
  );
};

export default App;
