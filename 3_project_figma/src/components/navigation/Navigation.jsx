import React from "react";
import SkinClinic from "../../assets/SkinClinic.png";
import Background from "../../assets/Mask_Group.jpg";
import Girl from "../../assets/Girl.png";

import Design1 from "../../assets/Design1.png";
import Design2 from "../../assets/Design2.png";
import Design3 from "../../assets/Design3.png";

import Gman from "../../assets/Gman.png";
import Gware from "../../assets/Gware.png";
import Groom from "../../assets/Groom.png";

import { FiTruck } from "react-icons/fi";
import { Ri24HoursLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";

const Navigation = () => {
  return (
    <div>
      <nav className="py-5 bg-white shadow-md sticky top-0 z-50">
        <div className="w-9/12 mx-auto flex justify-between">
          <div>
            <img src={SkinClinic} alt="logoFurniture" />
          </div>
          <div>
            <ul className="flex gap-6 text-sm">
              <li className="cursor-pointer hover:text-blue-800">
                <a href="/#">Home</a>
              </li>
              <li className="cursor-pointer hover:text-blue-800">
                <a href="/#">Services</a>
              </li>
              <li className="cursor-pointer hover:text-blue-800">
                <a href="/#">Top Rated</a>
              </li>
              <li className="cursor-pointer hover:text-blue-800">
                <a href="/#">Products</a>
              </li>
              <li className="cursor-pointer hover:text-blue-800">
                <a href="/#">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="flex min-h-screen items-center justify-end realtive bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* adding black background  overlay*/}
        {/* <div class="bg-gradient-to-bl from-black/40 via-white/40 to-black/40 absolute inset-0 h-full w-full -z-20"></div> */}

        <div className="bg-[#DfE9F4] max-w-lg rounded-md  p-8 space-y-4 shadow-lg mr-24">
          <p className="font-semibold text-gray-600">New Arrivals</p>
          <p className="font-bold text-5xl text-[#054C73]">
            Discover Our New Collection
          </p>
          <p className="text-gray-600 text-justify">
            Welcome to our furniture shop, where we offer a wide variety of
            high-quality and stylish furniture pieces to elevate the comfort and
            beauty of your home. Our shop is dedicated to providing our
            customers with excellent service, expert advice, and affordable
            prices. From classic designs to modern styles, we have something to
            suit every taste and budget. Come visit us and discover the perfect
            furniture pieces to make your house a home.
          </p>
          <button className="bg-[#054C73] text-white py-3 px-6 rounded-full text-sm font-semibold uppercase">
            Button now
          </button>
        </div>
      </div>

      {/* bottom section  */}
      <div className="py-16 bg-[#F2F5FF] text-gray-600">
        <div className="w-9/12 mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="text-5xl flex items-center">
                <FiTruck />
              </div>
              <div>
                <p className="text-2xl font-bold">Free Delivery</p>
                <p>We Provide Fastest Delivery!</p>
              </div>
            </div>
            {/* adding support */}
            <div className="flex gap-6">
              <div className="text-5xl flex items-center">
                <Ri24HoursLine />
              </div>
              <div>
                <p className="text-2xl font-bold">Support 24/7</p>
                <p>Anytime Anywhere with our customer support.</p>
              </div>
            </div>
            {/* adding authentic */}
            <div className="flex gap-6">
              <div className="text-5xl flex items-center">
                <MdVerifiedUser />
              </div>
              <div>
                <p className="text-2xl font-bold">100% Authentic</p>
                <p>Get Our Authentic Products!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Inspiration Collection*/}
      <div className="py-16 text-gray-600">
        <div className="w-9/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl font-bold">Inspiration Collection</p>
            <p className="text-gray-500">
              Check out our Amazing Inspirational Collection
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="h-94 w-34 bg-cover overflow-hidden rounded-tl-[4.5rem] mt-16">
              <img
                className="h-94 w-34"
                src="https://st.hzcdn.com/simgs/7b71f4890ed67f5c_4-3080/transitional-living-room.jpg"
                alt="couch room"
              />
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img
                className="h-94 w-34"
                src="http://novo-design.co.id/blog/wp-content/uploads/2022/08/17091-outline-sofa-3-5-seater-oslo-lounge-chair-swivel-black-ocean-50-strand-60-echo-62x42-divina-224-soft-side-off-white-smoked-oak-black-pebble-light-grey-org-768x1024.webp"
                alt="sofa set"
              />
            </div>
            <div className="h-94 w-34  overflow-hidden rounded-br-[4.5rem] mt-16">
              <img
                className="h-94 w-34 rounded-br-[4.5rem]"
                src="https://static.dezeen.com/uploads/2021/12/porada-furniture-design-collection_dezeen_2364_col_38-scaled.jpg"
                // https://static.dezeen.com/uploads/2021/12/porada-furniture-design-collection_dezeen_2364_col_38-scaled.jpg
                alt="tv cabinet"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Next Section */}
      <div className="bg-[#F2F5FF] text-gray-600 py-16">
        <div className="w-9/12 mx-auto">
          <div className="flex justify-between items-center-gap-12">
            <div className="w-5/12 space-y-4">
              <p className="text-2xl font-bold">Beautify Your Space</p>
              <p className="text-gray=500 leading-7 text-justify">
                Beautifying spaces can be achieved through various means. One
                way is to use colors and textures that complement each other to
                create a visually pleasing environment. Adding plants and
                flowers can also enhance the aesthetic appeal of a space while
                also providing a natural element. Incorporating art, whether it
                be paintings, sculptures, or other forms of artistic expression,
                can also elevate the beauty of a space. Proper lighting, both
                natural and artificial, can also play a significant role in
                enhancing the ambiance and attractiveness of a space.
                Ultimately, beautifying spaces requires creativity, attention to
                detail, and an understanding of how different design elements
                can work together to create a cohesive and visually appealing
                environment.
              </p>
              <button className="py-3 px-6 rounded bg-[#054C73] text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
            {/* flex item div */}
            <div className="relative w-5/12 z-10">
              <div>
                <img src={Girl} alt="girl icon" className="w-10/12" />
              </div>

              <div class="absolute top-1/2 right-0 -translate-y-2/4 -z-10">
                <svg
                  width="372"
                  height="374"
                  viewBox="0 0 372 374"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="186"
                    cy="186.995"
                    rx="186"
                    ry="186.855"
                    fill="#09513B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of section next init */}
      <div className="bg-white py-16 text-gray-600">
        <div className="w-9/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl font-bold">Browse The Range</p>
            <p className="text-gray-500">With the Lavish Design and Outlook.</p>
          </div>
          {/* image side by side implies flex with gap */}
          <div className="flex gap-10 justify-center">
            <div className="h-94 w-34 overflow-hidden">
              <img src={Design1} alt="" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Dining
              </p>
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img src={Design3} alt="" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Living
              </p>
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img src={Design2} alt="" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Bedroom
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* New section  */}
      <div className=" bg-white py-16 text-gray-700 w-9/12 mx-auto">
        <div className="w-9/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl font-bold">How It Works</p>
            <p className="text-gray-500">
              Give us a Call, Email, or Simply text from anywhere we are 24/7
              live on your services!
            </p>
          </div>
          {/* images  */}
          <div>
            <div className="flex gap-10">
              <div className="h-94 w-34 overflow-hidden">
                <img src={Gman} alt="" />
                <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                  Purchase Securely
                </p>
                <p className="text-center text-sm w-9/12 mx-auto">
                  We assure the safest purchase on our commodities.
                </p>
              </div>
              <div className="h-94 w-34 overflow-hidden">
                <img src={Gware} alt="" />
                <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                  Ship From Warehouse
                </p>
                <p className="text-center text-sm w-9/12 mx-auto">
                  We assure the safest purchase on our commodities.
                </p>
              </div>
              <div className="h-94 w-34 overflow-hidden">
                <img src={Groom} alt="" />
                <p className="text-center text-2xl  font-bold mt-4 text-gray-700">
                  Purchase Securely
                </p>
                <p className="text-center text-sm w-9/12 mx-auto">
                  We assure the safest purchase on our commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next Section  Join Mailing list:*/}
      <div className="bg-white py-16 text-gray-600">
        <div className="w-9/12 mx-auto text-center">
          <div className="mb-12">
            <p className="text-2xl font-bold">Join Our Mailing List</p>
            <p className="text-gray-500 w-5/12 mx-auto">
              Sign Up to receive inspiration, product updates, and special
              offers from our team.
            </p>
          </div>
          <div className="inline-block border  border-[#054C73] rounded-md">
            <input
              type="text"
              placeholder="david@gmail.com"
              className=" py-3 px-4 rounded-l-md placeholder:text-gray-400 placehoder:text-xs bg-white placeholder:text-center "
            />
            <button className="py-5 px-5 bg-[#054C73] text-white text-sm rounded-r-md">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* footer Section  */}
      <footer>This is Footer</footer>
    </div>
  );
};

export default Navigation;

// D:\Projects\Tailwind\3_project_figma\src\assets\SkinClinic.png
// 3_project_figma\src\assets\SkinClinic.png
