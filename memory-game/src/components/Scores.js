import React from "react";

function Scores(props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center">
        Level: {props.level ? props.level : 1}
      </h2>
      <h2 className="text-xl font-bold text-center">
        Current Score: {props.currentScore ? props.currentScore : 0}
      </h2>
      <h2 className="text-lg font-bold text-center text-red-500">
        High Score: {props.highScore ? props.highScore : 0}
      </h2>
    </div>
  );
}

export default Scores;
