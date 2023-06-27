"use client";

import TechStack from "./components/TechStack";
import TeamStack from "./components/TeamStack";
import ScheduleStack from "./components/ScheduleStack";
import Form from "./components/Form";
import { useState } from "react";
import useFormStage from "../hooks/useFormStage";
import Header from "../components/Header";

const Browse = () => {
  const [stage, setStage] = useState(0);
  return (
    <main className="h-[90%] w-full">
      <Header stage={stage} setStage={setStage} />

      <section className="flex min-h-[75%] items-center">
        {stage == 0 && <TechStack setStage={setStage} />}
        {stage == 1 && <TeamStack setStage={setStage} />}
        {stage == 2 && <ScheduleStack setStage={setStage} />}
        {stage == 3 && <Form setStage={setStage} />}
      </section>
    </main>
  );
};

export default Browse;
