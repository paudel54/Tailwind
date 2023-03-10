import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { IoMdCafe } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { FaHospital } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Screen1 = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-left lg:bg-top bg-cover "
        style={{
          backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/images6/Travel-Wallpaper-Free-Download.jpg")`,
        }}
      >
        {/* Creating a Banner */}
        {/* to make full height in small devices use background image on parent div instead of img tag */}

        {/* <img
          className="h-full w-full object-cover"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-Wallpaper-Free-Download.jpg"
          alt="food"
        /> */}
        {/* adding overlay background black transparent */}
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="absolute inset-0 h-full w-full">
          <div className="flex min-h-full w-full items-center justify-center">
            <div className="space-y-6">
              <div className="text-white text-center ">
                <p className="text-2xl lg:text-4xl capitalize font-bold  text-white">
                  Discover places that people love
                </p>
                <p className="text-lg text-white mt-2 w-8/12 mx-auto">
                  We will help you find the best place in the world
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 ">
                <div>
                  <input
                    type="text"
                    placeholder="location"
                    className="rounded-md py-3 px-4 w-80 bg-white text-gray focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="I am looking for...."
                    className="rounded-md py-3 px-4 w-80 bg-white text-gray focus:outline-none"
                  />
                </div>

                <div>
                  <button className="rounded-md py-2 lg:py-2.5 px-4 lg:px-6 bg-amber-500 text-white hover:bg-amber-600">
                    <span className="flex items-center gap-1 justify-center">
                      <BiSearch />
                      Search
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-10/12 mx-auto">
                <ul className="flex flex-wrap gap-5 justify-center text-sm text-white items-center -mt-2">
                  <li className="capitalize">
                    <a href="/#" className=" align-middle  md:inline-flex">
                      <span className="flex items-center gap-1">
                        <BiRestaurant />
                        <span> Restaurants</span>
                      </span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="/#" className=" align-middle  md:inline-flex">
                      <span className="flex items-center gap-1">
                        <IoMdCafe />
                        <span> Cafe</span>
                      </span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="/#" className=" align-middle  md:inline-flex">
                      <span className="flex items-center gap-1">
                        <CgGym />
                        <span> Fitness</span>
                      </span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="/#" className=" align-middle  md:inline-flex">
                      <span className="flex items-center gap-1">
                        <FaHospital />
                        <span> Hospital</span>
                      </span>
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="/#" className=" align-middle  md:inline-flex">
                      <span className="flex items-center gap-1">
                        <AiOutlineShoppingCart />
                        <span> Shopping</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
