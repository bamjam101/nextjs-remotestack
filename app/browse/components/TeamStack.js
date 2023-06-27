"use client";

import Button from "@/app/components/Button";
import SelectCard from "@/app/components/SelectCard";
import useFormData from "@/app/hooks/useFormData";
import { useEffect, useState } from "react";
import {
  BiConfused,
  BiPieChart,
  BiSolidCoffee,
  BiSolidPieChart,
} from "react-icons/bi";

const TeamStack = ({ setStage }) => {
  const { forms } = useFormData();
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
      <main className="flex gap-6 justify-center items-center my-4 lg:my-6">
        <SelectCard
          stage={1}
          icon={<BiSolidCoffee className="h-full w-full" />}
          label="One Engineer"
        />
        <SelectCard
          stage={1}
          icon={<BiPieChart className="h-full w-full" />}
          label="Small Team"
        />
        <SelectCard
          stage={1}
          icon={<BiSolidPieChart className="h-full w-full" />}
          label="Large Team"
        />
        <SelectCard
          stage={1}
          icon={<BiConfused className="h-full w-full" />}
          label="I am not Sure"
        />
      </main>
      {forms?.length ? (
        <Button label={"Continue"} rounded large onClick={() => setStage(2)} />
      ) : (
        <Button label={"Continue"} rounded large disabled />
      )}
    </section>
  );
};

export default TeamStack;
