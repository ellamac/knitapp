import React, { useState, useEffect } from "react";
import "../styles/rounds.css";
import Stitches from "./Stitches";

const Round = ({ round }) => {
  const [showStitches, setShowStitches] = useState(false);

  return (
    <div className="roundCard">
      <h2>Round {round.roundNum}</h2>
      <p>{round.roundInstructions}</p>
      <button onClick={() => setShowStitches(!showStitches)}>
        Stitch by stitch
      </button>
      <Stitches show={showStitches} round={round} />
    </div>
  );
};

export default Round;
