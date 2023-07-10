import React, { useState, useEffect } from "react";
import Stitch from "./Stitch";
import "../styles/stitches.css";

const Stitches = ({ show, round }) => {
  const st = Object.keys(round).filter(
    (key) => key.includes("stitch") && round[key]
  );
  return (
    <div className={show ? "stitches show" : "stitches hide"}>
      {st.map((k, i) => (
        <Stitch st={round[k]} key={i} i={i + 1} />
      ))}
    </div>
  );
};

export default Stitches;
