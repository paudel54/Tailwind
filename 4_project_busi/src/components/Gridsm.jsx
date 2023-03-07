import React from "react";

const Gridsm = ({ imgUrl, num }) => {
  return (
    <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
      <img
        className="rounded w-full h-full object-cover shadow"
        src={imgUrl}
        alt=""
      />
      <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
      <div className="absolute bottom-2 left-3  ">
        <p className="text-white text-lg font-semibold">Newly Opened</p>
        <p className="text-white text-sm">{num} places</p>
      </div>
    </div>
  );
};

export default Gridsm;
