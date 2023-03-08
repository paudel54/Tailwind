// Popular Section!
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
const Screen2 = () => {
  return (
    <div>
      <div className="bg-gray-300 py-32">
        <div className="w-8/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 mb-3">
              Popular Places
            </p>
            <p className="text-gray-600">Discover Most Searched Places</p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-10 mx-auto">
              {/* cards */}
              <div className="bg-white rounded-md shadow hover:shadow-xl overflow-hidden">
                <div className="h-[21rem] w-full ">
                  <img
                    className="h-full w-full object-cover"
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/87/92.jpg"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      1409 reviews
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Nagarkot ViewPoint
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">Bhaktapur</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    View Point
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Landmark
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Nature
                  </span>
                </div>
              </div>
              {/* card 2 */}
              <div className="bg-white rounded-md shadow hover:shadow-xl transition-all overflow-hidden">
                <div className="h-[21rem] overflow-hidden w-full ">
                  <img
                    className="h-full w-full object-cover"
                    src="https://i.ytimg.com/vi/8ZpwbAhrj0k/maxresdefault.jpg"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      620 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Star Mall
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">CA</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Shopping Center
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Mall
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Childrens wear
                  </span>
                </div>
              </div>
              {/* card 3 */}
              <div className="bg-white rounded-md shadow hover:shadow-xl transition-all overflow-hidden">
                <div className="w-full h-[21rem] ">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1546699718-5871c27b4197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      785 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Children's Park
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">Banglore</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Playground
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    park
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Garden
                  </span>
                </div>
              </div>

              {/* card4 */}
              <div className="bg-white rounded-md shadow hover:shadow-xl transition-all overflow-hidden">
                <div className="h-[21rem] w-full  ">
                  <img
                    className="h-full w-full object-cover"
                    src="https://www.jonesaroundtheworld.com/wp-content/uploads/2022/01/India-Gate-New-Delhi-India-Landmak.jpg"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      802 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Golden Gate
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">India</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    LandMark
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Entry Point
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Gate of India
                  </span>
                </div>
              </div>
              {/* card5 */}
              <div className="bg-white rounded-md shadow hover:shadow-xl transition-all overflow-hidden">
                <div className="h-[21rem]  w-full">
                  <img
                    className="h-full w-full object-cover"
                    src="https://cdn.destguides.com/files/store/itinerary/396/background_image/jpeg_medium_202112291737-ab49363f466b371ac6de9c284aa1c90d.jpeg"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      1261 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Great Wall of China
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">Tao he</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Landmark
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Historical
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Heritage Site
                  </span>
                </div>
              </div>
              {/* card6 */}
              <div className="bg-white rounded-md shadow hover:shadow-xl transition-all overflow-hidden">
                <div className="h-[21rem]  w-full object-cover">
                  <img
                    className="h-full w-full "
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=500&h=400&s=1"
                    alt="dental"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  {/* stars */}
                  <div className="flex items-center text-sm text-amber-400 relative">
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      981 Reviews
                    </span>
                    <div className="absolute right-0 top-8 text-[2rem]">❤️‍🔥</div>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600 text-center -mt-2">
                  Patan Durbar Square
                </p>
                <p className="flex gap-1 justify-center">
                  <ImLocation />
                  <span className="text-gray-600 ">Kathmandu</span>
                </p>
                <div className="flex justify-center py-1 mb-1 gap-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Measeum
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Heritage Site
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full ">
                    Historical
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* End of Grid */}
          <div className="mt-8  text-center">
            <button className="text-gray-600 rounded-md py-2.5 px-6 bg-white border border-gray-100 text-lg shadow-xl hover:shadow-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
