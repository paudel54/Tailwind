// contains contact us section screen6
import React from "react";
import { MdContactEmergency } from "react-icons/md";

const Screen6 = () => {
  return (
    <div className="bg-slate-100 lg:py-36  dark:bg-gray-800">
      <div className="w-full lg:w-9/12 mx-auto">
        <div
          className="shadow-lg lg:rounded-xl w-full h-[46rem] bg-cover  bg-center z-10 relative"
          style={{
            backgroundImage: `url(https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy)`,
          }}
        >
          {/* <img
            className="w-full h-[46rem] object-cover rounded-xl"
            src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy"
            alt=""
          /> */}
          <div className="bg-black/60 absolute inset-0 h-full -z-10 lg:rounded-xl"></div>
          <div className="absolute right-8 left-8 top-24">
            <div className="flex  flex-col-reverse  gap-12 lg:gap-0 lg:flex-row items-end">
              <div className="w-1/2 hidden sm:hidden  lg:inline  text-gray-100">
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

              <div className="mx-auto lg:w-1/2">
                <div className="bg-white/70 dark:bg-gray-800 max-w-lg rounded-md shadow p-6 ml-auto space-y-2 md:space-y-4 lg:space-y-6 text-gray-600">
                  <div>
                    <p className="text-xl md:text-4xl font-bold mb-4 dark:text-gray-100">
                      Get In Touch
                    </p>
                    <p className="mb-2 lg:mb-0 dark:text-gray-100">
                      Need help or have some feedback for us?
                    </p>
                    <p className="dark:text-gray-50">
                      Fill out the form below to contact our team.
                    </p>
                  </div>
                  <form
                    action=""
                    className="space-y-1 md:space-y-2 lg:space-y-4 "
                  >
                    <div className="flex  text-gray-600 gap-6">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="dark:text-gray-100"
                        >
                          First Name
                        </label>
                        <input
                          placeholder="  Jane"
                          type="text"
                          className="bg-white dark:bg-gray-800 py-2 w-full text-gray-600 rounded-md border dark:border-gray-700 mt-0.5"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="first-name"
                          className="dark:text-gray-100"
                        >
                          Last Name
                        </label>
                        <input
                          placeholder="  Smith"
                          type="text"
                          className="py-2 w-full dark:bg-gray-800 text-gray-600 rounded-md border dark:border-gray-700 mt-0.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="first-name"
                        className="dark:text-gray-100"
                      >
                        Email
                      </label>
                      <input
                        placeholder="  mail@test.com"
                        type="email"
                        className="py-2 w-full dark:bg-gray-800 text-gray-600 rounded-md border dark:border-gray-700 mt-0.5"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="dark:text-gray-100"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        placeholder="  message"
                        type="text"
                        className="py-2 w-full dark:bg-gray-800 text-gray-600 rounded-md border dark:border-gray-700 mt-0.5"
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
