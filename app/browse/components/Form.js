import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Form = () => {
  return (
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
  );
};

export default Form;
