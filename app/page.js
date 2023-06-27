import Image from "next/image";

import Input from "./components/Input";
import Capsule from "./components/Capsule";
import SelectCard from "./components/SelectCard";

import {
  BiSolidCoffee,
  BiPieChart,
  BiConfused,
  BiSolidPieChart,
} from "react-icons/bi";

import { MdEmail } from "react-icons/md";

import { FaIndustry } from "react-icons/fa";

import {
  BsFillPersonFill,
  BsFillCalendarDayFill,
  BsFillCalendar2DateFill,
  BsFillCalendar2MonthFill,
} from "react-icons/bs";
import Button from "./components/Button";

export default function Home() {
  const technologies = [
    { name: "html", isSelected: false },
    { name: "css", isSelected: false },
    { name: "javascript", isSelected: false },
    { name: "python", isSelected: false },
    { name: "java", isSelected: false },
    { name: "c#", isSelected: false },
    { name: "php", isSelected: true },
    { name: "ruby", isSelected: false },
    { name: "swift", isSelected: false },
    { name: "kotlin", isSelected: false },
    { name: "react", isSelected: false },
    { name: "angular", isSelected: false },
    { name: "vue", isSelected: false },
    { name: "nodejs", isSelected: false },
    { name: "express", isSelected: false },
    { name: "django", isSelected: false },
    { name: "laravel", isSelected: false },
    { name: "spring", isSelected: false },
    { name: "dotnet", isSelected: false },
    { name: "other", isSelected: false },
    { name: "I am not sure", isSelected: true },
  ];
  return (
    <main className="flex min-h-[75%] items-center">
      {false && (
        <section className="h-full w-full flex flex-col justify-center items-center gap-2 transition-opacity duration-200">
          <header className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl font-bold">
              What skills would you like to see in your new team?
            </h2>
            <p className="text-xl font-semibold opacity-50">
              Select the desired areas of expertise
            </p>
          </header>
          <main className="flex flex-col items-center gap-5 w-full mt-4 lg:mt-6">
            <Input placeholder="Desired areas of expertise (e.g., JavaScript, Python, etc.)" />
            <div className="text-semibold text-gray-900/50 mt-4 lg:mt-6">
              Selected technologies are marked in{" "}
              <div
                title="purple"
                className="inline-block w-3 h-3 bg-purple-900 rounded-md"
              />{" "}
              <span className="text-purple-900">Purple</span>
            </div>
            <section className="flex flex-wrap gap-x-2 gap-y-4">
              {/* Selected technologies capsule list */}
              {technologies?.map((tech) => (
                <Capsule
                  key={tech.name}
                  label={tech.name}
                  isSelected={tech.isSelected}
                />
              ))}
            </section>
          </main>
        </section>
      )}
      {false && (
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
      )}
      {false && (
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
      )}
      <section className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 place-items-start">
        <div className="flex flex-col gap-6">
          <header className="text-3xl font-bold">
            When do you need the developer to start?
          </header>
          <form className="flex flex-col gap-4">
            <Input
              icon={<MdEmail className="h-full w-full" />}
              placeholder="Email Address"
            />
            <Input
              icon={<FaIndustry className="h-full w-full" />}
              placeholder="Company Name"
            />
            <Input
              icon={<BsFillPersonFill className="h-full w-full" />}
              placeholder="Contact Name"
            />
            <Input placeholder="Phone Number" />
            <Button label="Find the developers you'll like" />
          </form>
        </div>
        <div className="hidden md:grid w-full h-full place-items-center overflow-hidden">
          <Image
            src="/images/side-image.jpg"
            alt="Programmer"
            width={600}
            height={600}
            className="w-auto h-auto"
          />
        </div>
      </section>
    </main>
  );
}
