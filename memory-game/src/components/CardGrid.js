import React from "react";

import Card from "./Card";

function CardGrid(props) {
  const images = props.images;

  return (
    <div className="grid grid-cols-4 h-full w-full place-items-center gap-4 p-2 mb-8">
      {images.map((image, i) => {
        return (
          <Card
            img={image.image}
            name={image.name}
            key={image.name}
            cardClick={props.cardClick}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
