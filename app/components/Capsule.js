import React from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useFormState from "../hooks/useTechList";

const Capsule = ({
  label,
  isSelected = true,
  onSelect,
  technologies,
  setTechnologies,
}) => {
  const { remove } = useFormState();
  return (
    <button
      onClick={
        onSelect
          ? onSelect
          : () => {
              setTechnologies([
                ...technologies,
                {
                  name: label,
                  isSelected: false,
                },
              ]);
              remove(label);
            }
      }
      type="button"
      className={`rounded-full px-3 py-1 md:px-4 md:py-2 flex items-center justify-center gap-2 border-2 transition ${
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
