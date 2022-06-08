import React from "react";

function GameOverModal(props) {
  return (
    <div className="flex justify-center">
      <div className="shadow-xl text-center border-solid border-2 w-3/4 rounded-md">
        <h2 className="font-bold text-xl mt-2">Game Over</h2>
        <p className="my-8">Good game!</p>
        <div className="flex justify-end">
          <button
            className="mx-8 mb-2 bg-red-500 rounded w-[100px] p-1 text-white hover:bg-red-700"
            onClick={props.restart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
