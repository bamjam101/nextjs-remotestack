"use client";

import Button from "@/app/components/Button";
import SelectCard from "@/app/components/SelectCard";
import useFormData from "@/app/hooks/useFormData";
import React from "react";
import { BiConfused } from "react-icons/bi";
import {
  BsFillCalendar2DateFill,
  BsFillCalendar2MonthFill,
  BsFillCalendarDayFill,
} from "react-icons/bs";

const ScheduleStack = ({ setStage, style }) => {
  const { forms } = useFormData();
  return (
    <section
      className={`h-full w-full flex flex-col justify-center items-center gap-4 transition duration-500 delay-150 ${style}`}
    >
      <header className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl xl:text-3xl font-bold text-center">
          When do you need the developer to start?
        </h2>
        <p className="text-base text-center md:text-xl font-semibold text-gray-900/50">
          Decide when you will start your project together!
        </p>
      </header>
      <main className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 my-2 lg:my-4 xl:my-6">
        <SelectCard
          stage={2}
          icon={<BsFillCalendarDayFill className="h-full w-full" />}
          label="Immediately"
        />
        <SelectCard
          stage={2}
          icon={<BsFillCalendar2DateFill className="h-full w-full" />}
          label="In 1 or 2 weeks"
        />
        <SelectCard
          stage={2}
          icon={<BsFillCalendar2MonthFill className="h-full w-full" />}
          label=">2 weeks later"
        />
        <SelectCard
          stage={2}
          icon={<BiConfused className="h-full w-full" />}
          label="Not Sure"
        />
      </main>
      {forms?.length > 1 ? (
        <Button label={"Continue"} rounded large onClick={() => setStage(3)} />
      ) : (
        <Button label={"Continue"} rounded large disabled />
      )}
    </section>
  );
};

export default ScheduleStack;
