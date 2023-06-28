import React from "react";

const Button = ({
  type,
  label,
  secondary,
  icon,
  disabled,
  gutterLeft,
  rounded,
  large,
  onClick,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      disabled={disabled}
      type={type || "button"}
      className={`relative  
      ${rounded ? "rounded-full" : ""}
      ${
        gutterLeft ? "pr-4 lg:pr-6" : "px-4 lg:px-6"
      }  py-3 lg:py-4 flex justify-center items-center hover:opacity-100 disabled:pointer-events-none gap-2 opacity-75 focus:opcaity-100 outline-none focus:outline-none transition  ${
        secondary
          ? "bg-transparent"
          : disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-purple-900 text-white"
      } 
      ${large ? "w-40" : "undefined"}`}
    >
      {icon && (
        <span className="w-6 h-6 lg:w-9 lg:h-9 grid place-items-center">
          {icon}
        </span>
      )}
      <p className="font-semibold text-md">
        {label === "Previous Section" ? (
          <span className="hidden md:block">{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </p>
    </button>
  );
};

export default Button;
