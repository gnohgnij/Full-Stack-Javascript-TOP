import React, { useState } from "react";

function Card(props) {
  return (
    <div
      className="w-6/12 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-center rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl"
      onClick={props.cardClick}
    >
      <img src={props.img} className="w-full aspect-square rounded-md" />
      <div className="bg-white opacity-50 text-zinc-900 font-bold text-sm">
        {props.name}
      </div>
    </div>
  );
}

export default Card;
