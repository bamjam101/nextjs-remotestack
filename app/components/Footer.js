import React from "react";

const Footer = ({ progress }) => {
  return (
    <footer className="grid place-items-center">
      <div className="relative rounded-full overflow-hidden z-10 h-5 w-full my-6 bg-gray-400">
        <div
          className={`absolute left-0 top-0 z-50 bg-purple-900 rounded-full transition h-full w-[30%]`}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
