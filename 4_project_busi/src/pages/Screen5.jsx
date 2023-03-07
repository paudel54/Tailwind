// Testimonials Section:
import React from "react";
import Button from "../components/Button";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";

const Screen5 = () => {
  return (
    <div className="bg-white py-32 relative z-10">
      <div className="bg-slate-50 w-8/12 absolute bottom-0 right-0 top-16 -z-10 rounded-tl-3xl"></div>
      <div className="w-8/12 mx-auto">
        <div className="mb-20">
          <p className="text-4xl font-bold text-gray-600 w-5/12">
            What Our Customers Are Saying!
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="w-10/12 h-72 relative mb-6">
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
                className="w-full h-full object-cover rounded-md shadow-md "
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
          <div className="w-1/2 text-gray-600">
            <p className="text-xl font-semibold capitalize mb-3">
              Help us improve our Efficiency!
            </p>
            <p className="mb-6">
              By spreading word-of-mouth recommendations and sharing their
              satisfaction with others, customers can help increase brand
              awareness and attract new users to the product. It is important to
              recognize and thank customers for their support, as their advocacy
              can greatly contribute to the success and growth of a project.
            </p>
            <div>
              <p className="font-bold text-lg">Deepika Ghimire</p>
              <p>Lead Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
      I am testimonials Sections
    </div>
  );
};

export default Screen5;
