import React from "react";
import SkinClinic from "../../assets/SkinClinic.png";
import Background from "../../assets/Mask_Group.jpg";

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
                <a href="/#">Doctors</a>
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
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            maiores ab, suscipit magni repudiandae, nisi unde a vero dignissimos
            debitis inventore, ullam quam expedita? Laborum commodi possimus
            ratione officiis voluptate!
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
                src="https://st.hzcdn.com/simgs/7b71f4890ed67f5c_4-3080/transitional-living-room.jpg"
                alt="couch room"
              />
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img
                src="http://novo-design.co.id/blog/wp-content/uploads/2022/08/17091-outline-sofa-3-5-seater-oslo-lounge-chair-swivel-black-ocean-50-strand-60-echo-62x42-divina-224-soft-side-off-white-smoked-oak-black-pebble-light-grey-org-768x1024.webp"
                alt="sofa set"
              />
            </div>
            <div className="h-[50vh] w-auto overflow-hidden rounded-br-[4.5rem] mt-16">
              <img
                src="https://static.dezeen.com/uploads/2021/12/porada-furniture-design-collection_dezeen_2364_col_38-scaled.jpg"
                // https://static.dezeen.com/uploads/2021/12/porada-furniture-design-collection_dezeen_2364_col_38-scaled.jpg
                alt="tv cabinet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

// D:\Projects\Tailwind\3_project_figma\src\assets\SkinClinic.png
// 3_project_figma\src\assets\SkinClinic.png
