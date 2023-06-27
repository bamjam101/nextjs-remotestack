import React from "react";

const SelectCard = ({ icon, label }) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-14 rounded-lg flex flex-col items-center justify-center gap-4 shadow-lg hover:bg-purple-900/50">
      <figure className="w-20 h-20 grid place-items-center">{icon}</figure>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center">
        {label}
      </h3>
    </div>
  );
};

export default SelectCard;
