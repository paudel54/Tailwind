import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-10 left-0 right-0 text-white">
      <nav className="w-11/12 mx-auto flex justify-between items-center py-5">
        <div>
          <a href="/#" className="text-sm lg:text-lg">
            AR Origin
          </a>
        </div>
        <div>
          <button className="text-sm lg:text-lg transition-all text-amber-500 py-2 rounded-md px-4 border border-amber-500  bg-transparent hover:bg-amber-500 hover:text-white">
            Add Listing
          </button>
        </div>

        <div className="space-x-4">
          <button className="text-sm lg:text-lg">Sign In</button>
          <button className="text-sm lg:text-lg">Sign Up</button>
        </div>

        {/* <div>Hello test mode i am for navbar lets go -🚀🚀🚀</div> */}
      </nav>
    </div>
  );
};

export default Navbar;
