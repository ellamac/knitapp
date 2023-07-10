import React, { useState, useEffect } from "react";
import "../styles/stitches.css";
import dynamicColor from "../helpers/dynamicColor.js";

const Stitch = ({ st, i }) => {
  const stType = st.substring(0, st.indexOf("#"));
  const stColor = st.substring(st.indexOf("#"));

  return (
    <div className="stitch" style={{ borderColor: "blueviolet" }}>
      <div
        style={{ backgroundColor: stColor, borderBottomColor: "blueviolet" }}
        className="numCont"
      >
        <p className="stNum" style={{ color: dynamicColor(stColor) }}>
          {i}
        </p>
      </div>
      <div className="stType">{stType}</div>
    </div>
  );
};

export default Stitch;
