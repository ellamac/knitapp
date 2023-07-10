import React, { useState, useEffect } from "react";
import Round from "./Round";

const Content = ({ data }) => {
  return (
    <div className="content">
      <h1>Pattern</h1>
      {data ? (
        data.map((d, i) => <Round round={d} key={i} />)
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
};

export default Content;
