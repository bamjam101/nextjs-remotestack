"use client";

import { useState } from "react";
import Capsule from "@/app/components/Capsule";
import Input from "@/app/components/Input";
import DropdownSelection from "./DropdownSelection";
import useFormState from "@/app/hooks/useTechList";
import Button from "@/app/components/Button";
import useFormData from "@/app/hooks/useFormData";

const TechStack = ({ setStage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { forms, add: append, remove: pop } = useFormData();
  const { add, technologies: techs } = useFormState();

  const [technologies, setTechnologies] = useState([
    { name: "html", isSelected: false },
    { name: "css", isSelected: false },
    { name: "javascript", isSelected: false },
    { name: "python", isSelected: false },
    { name: "java", isSelected: false },
    { name: "c#", isSelected: false },
    { name: "php", isSelected: false },
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
    { name: "I am not sure", isSelected: false },
  ]);

  const onSelect = (techName) => {
    setTechnologies(technologies.filter((tech) => tech.name !== techName));
    add(techName);
  };

  return (
    <section
      onClick={(e) => {
        setIsOpen(false);
      }}
      className="h-full w-full flex flex-col justify-center items-center gap-2 lg:gap-3 xl:gap-5 transition-opacity duration-200"
    >
      <header className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-5">
        <h2 className="text-2xl xl:text-3xl font-bold text-center">
          What skills would you like to see in your new team?
        </h2>
        <p className="text-base md:text-xl text-center font-semibold  text-gray-900/50">
          Select the desired areas of expertise
        </p>
      </header>
      <main className="flex flex-col items-center gap-2 lg:gap-3 xl:gap-5 w-full mt-2 lg:mt-4 xl:mt-6">
        <section className="w-full relative">
          <header
            className="peer"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <Input placeholder="Desired areas of expertise (e.g., JavaScript, Python, etc.)" />
          </header>
          {isOpen && (
            <ul
              className={`absolute -bottom-[26svh] left-0 w-full z-50 h-[25svh] overflow-x-hidden overflow-y-scroll bg-white py-3 rounded-lg transition-opacity duration-300`}
            >
              {technologies.map((tech, index) => {
                if (tech.isSelected === true) {
                  return;
                }
                return (
                  <DropdownSelection
                    label={tech.name}
                    onClick={() => {
                      setTechnologies(
                        technologies.filter((tech, i) => i !== index)
                      );
                      add(tech.name);
                    }}
                    key={tech.name}
                  />
                );
              })}
            </ul>
          )}
        </section>

        <section className="flex justify-center flex-wrap gap-x-2 gap-y-2 md:gap-y-4 mt-2 lg:mt-4 xl:mt-6">
          {/* Selected technologies capsule list */}
          {techs?.map((tech) => (
            <Capsule
              key={tech}
              label={tech}
              technologies={technologies}
              setTechnologies={setTechnologies}
            />
          ))}
        </section>
        <hr className="bg-gray-500 w-full bg-opacity-50 h-[2px] mt-2 lg:mt-4 xl:mt-6" />
        <section className="flex justify-center flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
          {/* Not selected technologies capsule list */}
          {technologies?.map((tech) => (
            <Capsule
              key={tech.name}
              label={tech.name}
              isSelected={tech.isSelected}
              onSelect={() => onSelect(tech.name)}
            />
          ))}
        </section>
        <hr className="bg-gray-500 w-full bg-opacity-50 h-[2px] mb-2 lg:mb-4 xl:mb-6" />

        {techs?.length ? (
          <Button
            label={"Continue"}
            rounded
            large
            onClick={() => {
              if (forms?.length && forms[0].stage === 0) {
                pop({ stage: 0, data: forms[0]?.data });
              }
              append({ stage: 0, data: techs });
              setStage(1);
              console.log(forms);
            }}
          />
        ) : (
          <Button label={"Continue"} rounded large disabled />
        )}
      </main>
    </section>
  );
};

export default TechStack;
