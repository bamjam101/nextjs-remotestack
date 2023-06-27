import React from "react";

const Input = ({ placeholder, icon }) => {
  return (
    <div className="p-3 lg:p-4 focus:outline-1 ring-1 flex items-center gap-x-4 ring-gray-400 outline-purple-900 rounded-md">
      {icon && (
        <span className="w-5 h-5 lg:w-6 lg:h-6 grid place-items-center">
          {icon}
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none focus:outline-none"
      />
    </div>
  );
};

export default Input;
