import React from "react";
import Toggle from "../components/Toggle";
const Screen9 = () => {
  return (
    <footer className="bg-gray-800 md:py-8 lg:py-14 border-t dark:border-gray-600  dark:bg-gray-800">
      <div className="w-8/12 mx-auto ">
        <div className="flex flex-col flex-wrap justify-center items-center md:flex-row  lg:justify-between py-6 lg:py-12">
          <div className="mb-5">
            <p className="uppercase font-bold mb-2 text-white">AR Origin</p>
            <ul>
              <li className="text-white">Our Services</li>
              <li className="text-white">Contact Us</li>
              <li className="text-white">Support</li>
            </ul>
          </div>
          {/* flex component */}
          <div className="mb-5">
            <p className="uppercase font-bold mb-2 text-white">Business</p>
            <ul>
              <li className="text-white">Grow Product</li>
              <li className="text-white">A step Call</li>
              <li className="text-white">Marketing</li>
            </ul>
          </div>
          {/* felx compo */}
          <div className="mb-5">
            <p className="uppercase font-bold mb-2 text-white">Support</p>
            <ul>
              <li className="text-white">Toll Free No</li>
              <li className="text-white">Contact Us</li>
              <li className="text-white">+5129987672</li>
            </ul>
          </div>
          {/* Follow us icon with images */}
          <div>
            <p className="uppercase font-bold mb-2 text-white">Follow Us</p>
            <ul className="flex gap-3 justify-center items-center">
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                alt="fb"
              />
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                alt="ig"
              />
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                alt="twitter"
              />
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                alt="fb"
              />
            </ul>
          </div>
          {/* toggle btn */}
          <Toggle />
        </div>
        {/* copyright Section */}
        <div className="pt-1 md:pt-6 lg:pt-12 ">
          <p className="text-gray-100 text-sm">
            2023 @ AR Origin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Screen9;
