import React from "react";

const DropdownSelection = ({ label, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="w-full px-3 py-3 bg-white shadow-sm hover:bg-purple-900/20 cursor-pointer"
    >
      {label}
    </li>
  );
};

export default DropdownSelection;
