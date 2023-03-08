import React from "react";

const Gridvalu = ({ Icon, text }) => {
  return (
    <div className="p-4 rounded-md hover:bg-white hover:shadow-lg transition-all">
      <button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
        {<Icon className="text-purple-800 text-xl" />}
      </button>
      <p className="text-xl font-bold mt-3 mb-2 text-gray-600">{text[0]}</p>
      <p className="text-gray-500 ">{text[1]}</p>
    </div>
  );
};

export default Gridvalu;
