import React from "react";
import Button from "./Button";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";
import SiteTitle from "./SiteTitle";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-5 py-6">
      <Button
        icon={<FaArrowLeft />}
        label="Previous Section"
        secondary
        gutterLeft
      />
      <SiteTitle
        icon={<FaGlobe color="rgb(88, 28, 135)" size={"h-full w-full"} />}
        title="RemoteStack"
      />
      <Button rounded label="Progress" disabled />
    </header>
  );
};

export default Header;
