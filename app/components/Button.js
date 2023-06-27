import React from "react";

const Button = ({
  type,
  label,
  secondary,
  icon,
  disabled,
  gutterLeft,
  rounded,
}) => {
  return (
    <button
      type={type || "button"}
      className={`
      ${rounded ? "rounded-full" : ""}
      ${
        gutterLeft ? "pr-4 lg:pr-6" : "px-4 lg:px-6"
      }  py-3 lg:py-4 flex justify-center items-center gap-2 opacity-75 focus:opcaity-100 outline-none focus:outline-none hover:opacity-100 transition  ${
        secondary
          ? "bg-transparent"
          : disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-purple-900 text-white"
      } `}
    >
      {icon && (
        <span className="w-6 h-6 lg:w-9 lg:h-9 grid place-items-center">
          {icon}
        </span>
      )}
      <span className="font-semibold text-md">{label}</span>
    </button>
  );
};

export default Button;
