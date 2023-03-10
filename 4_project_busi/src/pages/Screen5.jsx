// Testimonials Section:
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";

const Screen5 = () => {
  return (
    <div className="bg-white py-32 relative z-10  dark:bg-gray-800">
      <div className="bg-slate-50 w-8/12 absolute bottom-0 right-0 top-16 -z-10 rounded-tl-3xl dark:bg-gray-800"></div>
      <div className="w-8/12 lg:w-10/12 xl:w-8/12 text-center mx-auto ">
        <div className="mb-10 md:mb-20">
          <p className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-100 w-full lg:w-5/12">
            What Our Customers Are Saying!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0  ">
            <div className="w-10/12 h-72 relative mb-10 md:mb-6">
              <div className="depika opacity-40 h-48 w-32  absolute -top-24 -left-16 -z-10 "></div>
              <div className="depika opacity-40 h-48 w-32  absolute -bottom-24 -right-16 -z-10 "></div>
              <div className="absolute z-10 -top-7 -right-7">
                <div className="bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl">
                    <IoMdQuote />
                  </span>
                </div>
              </div>
              <img
                className="w-full h-full object-cover rounded-md shadow-md ml-[1rem] md:ml-0 "
                src="https://media.istockphoto.com/id/1279126074/photo/head-and-shoulders-portrait-of-smiling-young-asian-businesswoman-working-in-busy-modern-office.jpg?s=612x612&w=0&k=20&c=0iJxUH-gnMqDuARxS2Sm6xp3dzf9Rttz7iP2005UcDw="
                alt="testimonials img"
              />
            </div>
            <div className="flex gap-3 ">
              <button className=" h-10 w-10 flex items-center justify-center bg-amber-400 text-white shadow:lg hover:shadow-xl rounded-full p-2">
                <AiOutlineLeft className="align-middle text-3xl text-gray-60 rounded-full" />
              </button>
              <button className="h-10 w-10 flex items-center justify-center bg-amber-400 text-white shadow:md hover:shadow-xl rounded-full p-2">
                <AiOutlineRight className="align-middle text-3xl text-gray-60" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-gray-600">
            <p className="text-xl font-bold capitalize mb-8 md:mb-3 dark:text-gray-100">
              Help us improve our Efficiency!
            </p>
            <p className="mb-20 md:mb-6 dark:text-gray-100">
              By spreading word-of-mouth recommendations and sharing their
              satisfaction with others, customers can help increase brand
              awareness and attract new users to the product. It is important to
              recognize and thank customers for their support, as their advocacy
              can greatly contribute to the success and growth of a project.
            </p>
            <div>
              <p className="font-bold text-lg dark:text-gray-100">
                Deepika Ghimire
              </p>
              <p className="dark:text-gray-100">Lead Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen5;
