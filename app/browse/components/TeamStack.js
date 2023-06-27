import SelectCard from "@/app/components/SelectCard";
import React from "react";
import {
  BiConfused,
  BiPieChart,
  BiSolidCoffee,
  BiSolidPieChart,
} from "react-icons/bi";

const TeamStack = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-4 transition-opacity duration-200">
      <header className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold">
          What skills would you like to see in your new team?
        </h2>
        <p className="text-xl font-semibold text-gray-900/50">
          We can provide assistance with{" "}
          <span className="text-purple-900">15+</span> Engineers!
        </p>
      </header>
      <main className="flex gap-6 justify-center items-center mt-4 lg:mt-6">
        <SelectCard
          icon={<BiSolidCoffee className="h-full w-full" />}
          label="One Engineer"
        />
        <SelectCard
          icon={<BiPieChart className="h-full w-full" />}
          label="Small Team"
        />
        <SelectCard
          icon={<BiSolidPieChart className="h-full w-full" />}
          label="Large Team"
        />
        <SelectCard
          icon={<BiConfused className="h-full w-full" />}
          label="Not Sure"
        />
      </main>
    </section>
  );
};

export default TeamStack;
