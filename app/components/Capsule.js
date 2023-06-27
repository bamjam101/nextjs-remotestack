import React from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Capsule = ({ label, isSelected }) => {
  return (
    <button
      type="button"
      className={`rounded-full px-4 py-2 flex items-center justify-center gap-2 border-2 transition ${
        isSelected
          ? "bg-purple-900 text-gray-100 border-purple-900"
          : "bg-transparent border-gray-500"
      }`}
    >
      <span className="font-semibold text-sm capitalize">{label}</span>
      <span className="w-5 h-5 lg:w-6 lg:h-6 grid place-items-center">
        {isSelected ? <AiOutlineClose /> : <FaPlus />}
      </span>
    </button>
  );
};

export default Capsule;
