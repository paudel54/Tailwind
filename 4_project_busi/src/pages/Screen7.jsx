// Features Sections!!
import Gridvalu from "../components/Gridvalu";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";
import { SiFurrynetwork } from "react-icons/si";

const Screen7 = () => {
  return (
    <div className="bg-slate-50 py-10 md:py-24 lg:py-36  dark:bg-gray-800">
      <div className="w-8/12 mx-auto">
        <div className="text-center text-gray-600 mb-12">
          <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 dark:text-gray-100">
            Our Valuable Customers
          </p>
          <p className="text-sm dark:text-gray-100">
            We are much overwhelmed to serve our active customers with our
            proactive services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="flex flex-col items-center md:items-start p-4 rounded-md hover:bg-white dark:hover:bg-transparent border border-transparent dark:hover:border-gray-700 hover:shadow-lg transition-all">
            <button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
              <BsChatSquareText className="text-purple-800 text-xl " />
            </button>
            <p className="text-xl font-bold mt-3 mb-2 text-gray-600">
              Unlimited Chats
            </p>
            <p className="text-gray-500 ">
              customer support to solve your issue anytime.
            </p>
          </div>
          <Gridvalu
            Icon={SiFurrynetwork}
            text={[
              "Departments",
              "Wider department network to resolve your extended issues.",
            ]}
          />
          <Gridvalu
            Icon={SlChemistry}
            text={[
              "Multiple Agents",
              " Our partnership includes from small scale to large scale industries",
            ]}
          />
          <Gridvalu
            Icon={BiChip}
            text={[
              "Rapid Processing",
              " Advance computing labroatory for rapid Processing. ",
            ]}
          />
          <Gridvalu
            Icon={BsChatSquareText}
            text={[
              "Detail logs",
              " A higher details event logs to customize yours requirements",
            ]}
          />
          <Gridvalu
            Icon={MdOutlineAnalytics}
            text={[
              "Analytics",
              " Analytics to show your business goals and progress",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen7;
