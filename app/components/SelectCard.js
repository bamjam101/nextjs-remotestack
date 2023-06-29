"use client";

import useFormData from "../hooks/useFormData";

const SelectCard = ({ icon, label, stage }) => {
  const { add, remove, forms } = useFormData();

  const handleTeamData = () => {
    if (forms.length > stage - 1) {
      remove({ stage: stage, data: forms[stage - 1]?.data });
    }
    add({ stage: stage, data: label }, stage);
  };

  return (
    <div
      onClick={handleTeamData}
      className={`p-6 sm:p-8 md:p-10 lg:p-14 rounded-lg flex flex-col items-center justify-center cursor-pointer gap-4 shadow-lg hover:bg-purple-900/50 ${
        forms[stage - 1]?.data === label ? "bg-purple-900/50" : "undefined"
      }`}
    >
      <figure className="w-20 h-20 grid place-items-center">{icon}</figure>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center">
        {label}
      </h3>
    </div>
  );
};

export default SelectCard;
