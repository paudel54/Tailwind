import React from "react";

const Cardsm = ({ imgUrl, text }) => {
  return (
    <a
      href="/#"
      className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 hover:shadow-lg transition-all space-y-5 rounded-lg"
    >
      <img className="w-32 h-32 mx-auto rounded-full" src={imgUrl} alt="" />
      <div className="space-y-2 text-center">
        <p className="text-gray-700 text-lg font-semibold mb-3 dark:text-gray-100">
          {text}
        </p>
      </div>
    </a>
  );
};

export default Cardsm;
