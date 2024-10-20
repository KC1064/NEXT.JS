"use client";

import { useState } from "react";

export default function ShowButton(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className=" flex gap-4">
      <button
        className="px-2 py-1 bg-red-300 rounded-lg text-gray-950 font-semibold"
        onClick={handleClick}
      >
        Show Price
      </button>
      {clicked && (
        <div className="text-lg text-red-500 font-bold">
          Price: {props.price}
        </div>
      )}
    </div>
  );
}
