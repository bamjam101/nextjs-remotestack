"use client";

import TechStack from "./components/TechStack";
import TeamStack from "./components/TeamStack";
import ScheduleStack from "./components/ScheduleStack";
import Form from "./components/Form";
import { useState } from "react";
import Header from "../components/Header";

const Browse = () => {
  const [stage, setStage] = useState(0);

  const isVisible = "pointer-events-auto opacity-100 z-10";
  const isNotVisible =
    "absolute w-full left-0 top-0 pointer-events-none opacity-0 -z-50";
  return (
    <main className="h-[90%] w-full">
      <Header stage={stage} setStage={setStage} />

      <section className="relative flex w-full min-h-[75%] items-center">
        <TechStack
          setStage={setStage}
          style={`${stage == 0 ? isVisible : isNotVisible}`}
        />
        <TeamStack
          setStage={setStage}
          style={`${stage == 1 ? isVisible : isNotVisible}`}
        />
        <ScheduleStack
          setStage={setStage}
          style={`${stage == 2 ? isVisible : isNotVisible}`}
        />
        <Form
          setStage={setStage}
          style={`${stage == 3 ? isVisible : isNotVisible}`}
        />
      </section>
    </main>
  );
};

export default Browse;
