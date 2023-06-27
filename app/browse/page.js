import React from "react";
import TechStack from "./components/TechStack";
import TeamStack from "./components/TeamStack";
import ScheduleStack from "./components/ScheduleStack";
import Form from "./components/Form";

const page = () => {
  return (
    <main className="flex min-h-[75%] items-center">
      {false && <TechStack />}
      {false && <TeamStack />}
      {false && <ScheduleStack />}
      {true && <Form />}
    </main>
  );
};

export default page;
