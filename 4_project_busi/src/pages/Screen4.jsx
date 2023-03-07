// This components contains the team sections.
import React from "react";
import { IoIosPeople } from "react-icons/io";
import { SiSololearn } from "react-icons/si";

const Screen4 = () => {
  return (
    <div className="bg-gray-50 py-32 relative">
      <div className="w-8/12 mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-1/2">
            <div className="jangam w-1/2 h-full absolute top-0 left-0 bottom-0 opacity-30 "></div>
            <div className="w-1/2 bg-gradient-to-l from-gray-50 via transparent absolute top-0 left-0 bottom-0 height-full"></div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-12">
                <div className="relative">
                  <img
                    className="w-48 h-60 object-cover rounded-md shadow-md"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                  {/* adding overlay */}
                  <div class="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md"></div>
                  <div class="absolute bottom-2 left-3 text-white text-sm">
                    <p class="font-semibold">Kiemu Swift</p>
                    <p>CEO</p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="w-48 h-60 object-cover rounded-md shadow-md"
                    src="https://img.freepik.com/free-photo/business-woman-posing-suit-white-background-high-quality-photo_114579-62304.jpg?w=360"
                    alt=""
                  />
                  {/* adding overlay */}
                  <div class="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md"></div>
                  <div class="absolute bottom-2 left-3 text-white text-sm">
                    <p class="font-semibold">Jane Smith</p>
                    <p>Manager</p>
                  </div>
                </div>
              </div>
              {/* duplicate */}
              <div className="flex flex-col gap-12 mt-12">
                <div className="relative">
                  <img
                    className="w-48 h-60 object-cover rounded-md shadow-md"
                    src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                  {/* adding overlay */}
                  <div class="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md"></div>
                  <div class="absolute bottom-2 left-3 text-white text-sm">
                    <p class="font-semibold">David Lark</p>
                    <p>Marketing Head</p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="w-48 h-60 object-cover rounded-md shadow-md"
                    src="https://thumbs.dreamstime.com/b/average-teenage-boy-29205908.jpg"
                    alt=""
                  />
                  {/* adding overlay */}
                  <div class="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md"></div>
                  <div class="absolute bottom-2 left-3 text-white text-sm">
                    <p class="font-semibold">Adam Aste</p>
                    <p>Senior Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-sm font-bold uppercase text-indigo-500 mb-1">
              Our Support Heroes
            </p>
            <p className="text-4xl font-bold ">Meet The Team</p>
            <p className="mt-3 text-gray-500 text-lg">
              Our team is incredibly efficient and effective when it comes to
              accomplishing tasks. We work together seamlessly, utilizing each
              other's strengths and expertise to ensure that projects are
              completed on time and to the highest standard. We are proactive in
              identifying potential roadblocks and developing solutions to
              overcome them, ensuring that we can meet and exceed expectations.
              Our dedication to our work and our ability to collaborate with
              each other makes us a powerhouse when it comes to accomplishing
              goals. We take pride in our efficiency and effectiveness and
              strive to continue improving with every project we undertake.
            </p>
            <div className="mt-8">
              <button className="mr-4 py-2 px-3 border-2 border-gray-500 font-semibold text-gray-500 shadow-md hover:bg-gray-500 hover:text-white rounded-full">
                <span className="flex gap-1 justify-center items-center">
                  <IoIosPeople />
                  Meet Us
                </span>
              </button>
              <button className="mr-4 py-2 px-3 border-2 border-blue-400 font-semibold text-blue-400 shadow-md hover:bg-blue-400 hover:text-white rounded-full">
                <span className="flex gap-1 justify-center items-center">
                  <SiSololearn />
                  Learn...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
