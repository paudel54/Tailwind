// contains contact us section screen6
import React from "react";
import { MdContactEmergency } from "react-icons/md";

const Screen6 = () => {
  return (
    <div className="bg-slate-100 py-36">
      <div className="w-9/12 mx-auto">
        <div className="shadow-lg rounded-xl relative">
          <img
            className="w-full h-[46rem] object-cover rounded-xl"
            src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy"
            alt=""
          />
          <div className="bg-black/60 absolute inset-0 h-full rounded-xl"></div>
          <div className="absolute right-8 left-8 top-24">
            <div className="flex items-end">
              <div className="w-1/2 text-gray-100">
                <div className="mb-5">
                  <p className="text-4xl font-bold mb-5">Find Us</p>
                  <div className="flex gap-6 ">
                    <div className="border-r  pr-4">
                      <p className="bold text-2xl">New York</p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                    <div className="border-r  border-white  pr-4">
                      <p className="bold text-2xl">Narita</p>
                      <p className="text-sm"> CI 876 JAPAN</p>
                    </div>
                    <div className="pr-4">
                      <p className="bold text-2xl">Xi Nank</p>
                      <p className="text-sm">Zhamg Mu, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <div className="bg-white/70 max-w-lg rounded-md shadow p-6 ml-auto space-y-6 text-gray-600">
                  <div>
                    <p className="text-4xl font-bold mb-4">Get In Touch</p>
                    <p>Need help or have some feedback for us?</p>
                    <p>Fill out the form below to contact our team.</p>
                  </div>
                  <form action="" className="space-y-4">
                    <div className="flex text-gray-600 gap-6">
                      <div>
                        <label htmlFor="first-name">First Name</label>
                        <input
                          placeholder="Jane"
                          type="text"
                          className="py-2 w-full text-gray-600 rounded-md border mt-0.5"
                        />
                      </div>

                      <div>
                        <label htmlFor="first-name">Last Name</label>
                        <input
                          placeholder="Smith"
                          type="text"
                          className="py-2 w-full text-gray-600 rounded-md border mt-0.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="first-name">Email</label>
                      <input
                        placeholder="mail@test.com"
                        type="email"
                        className="py-2 w-full text-gray-600 rounded-md border mt-0.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="first-name">Message</label>
                      <textarea
                        rows="4"
                        placeholder="message"
                        type="text"
                        className="py-2 w-full text-gray-600 rounded-md border mt-0.5"
                      />
                    </div>
                    <div>
                      <button className=" py-2 px-3 rounded-md shadow bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-xl">
                        <span className="flex items-center gap-2">
                          <MdContactEmergency />
                          Get In Touch
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen6;
