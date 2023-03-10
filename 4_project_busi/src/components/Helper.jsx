import React from "react";

const Helper = () => {
  return (
    <div className="fixed bottom-0 0 z-50 bg-red-600 text-white bg-opacity-70 text-xl shadow-md">
      <span className="sm:hidden">Default</span>
      <span className="hidden sm:inline md:hidden">Small Device</span>
      <span className="hidden md:inline lg:hidden">Medium Device</span>
      <span className="hidden lg:inline xl:hidden">Large Device</span>
      <span className="hidden xl:inline 2xl:hidden">Xl Device</span>
    </div>
  );
};

export default Helper;
