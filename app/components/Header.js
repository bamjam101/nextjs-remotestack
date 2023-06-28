"use client";

import Button from "./Button";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";
import SiteTitle from "./SiteTitle";
import { useEffect, useState } from "react";

const Header = ({ stage, setStage }) => {
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  useEffect(() => {
    if (stage < 1) {
      setIsBackDisabled(true);
    } else {
      setIsBackDisabled(false);
    }
  }, [stage]);
  return (
    <header className="flex justify-start md:justify-between items-center gap-0 md:gap-5 py-6">
      <Button
        disabled={isBackDisabled}
        icon={<FaArrowLeft />}
        label="Previous Section"
        secondary
        gutterLeft
        onClick={() => setStage(stage - 1)}
      />
      <SiteTitle
        icon={<FaGlobe color="rgb(88, 28, 135)" size={"h-full w-full"} />}
        title="RemoteStack"
      />
      <div className="hidden md:block">
        <Button rounded label="Progress" disabled />
      </div>
    </header>
  );
};

export default Header;
