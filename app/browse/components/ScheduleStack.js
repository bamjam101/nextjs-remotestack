import SelectCard from "@/app/components/SelectCard";
import React from "react";
import { BiConfused } from "react-icons/bi";
import {
  BsFillCalendar2DateFill,
  BsFillCalendar2MonthFill,
  BsFillCalendarDayFill,
} from "react-icons/bs";

const ScheduleStack = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-4 transition-opacity duration-200">
      <header className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold">
          When do you need the developer to start?
        </h2>
        <p className="text-xl font-semibold text-gray-900/50">
          Decide when you will start your project together!
        </p>
      </header>
      <main className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-6">
        <SelectCard
          icon={<BsFillCalendarDayFill className="h-full w-full" />}
          label="Immediately"
        />
        <SelectCard
          icon={<BsFillCalendar2DateFill className="h-full w-full" />}
          label="In 1 or 2 weeks"
        />
        <SelectCard
          icon={<BsFillCalendar2MonthFill className="h-full w-full" />}
          label=">2 weeks later"
        />
        <SelectCard
          icon={<BiConfused className="h-full w-full" />}
          label="Not Sure"
        />
      </main>
    </section>
  );
};

export default ScheduleStack;
