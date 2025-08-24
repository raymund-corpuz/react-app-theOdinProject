import React from "react";

const Card = () => {
  return (
    <div className="bg-white px-6 py-6 rounded-lg ring shadow-lg ring-gray-900/5 my-5 mx-5 w-100">
      <h3 className=" text-lg font-medium text-gray-900 my-2 text-base">
        Writes upside-down
      </h3>
      <p className=" text-sm text-gray-500 mt-2">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space
      </p>
    </div>
  );
};

export default Card;
