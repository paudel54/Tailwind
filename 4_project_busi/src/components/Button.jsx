import React from "react";

const Button = ({ Icon }) => {
  return (
    <div className="flex gap-3">
      <button className="bg-amber-400 text-white shadow:md hover:shadow-xl">
        {<Icon />}
      </button>
    </div>
  );
};

export default Button;
