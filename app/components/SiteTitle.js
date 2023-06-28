import React from "react";

const SiteTitle = ({ icon, title }) => {
  return (
    <section
      className={`pr-4 lg:pr-6 py-3 rounded-full lg:py-4 flex cursor-pointer gap-2 justify-center items-center opacity-90 focus:opcaity-100 outline-none focus:outline-none hover:opacity-100 transition`}
    >
      {icon && (
        <span className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 grid place-items-center">
          {icon}
        </span>
      )}
      <h1 className="font-bold text-md md:text-lg lg:text-2xl text-purple-900">
        {title}
      </h1>
    </section>
  );
};

export default SiteTitle;
