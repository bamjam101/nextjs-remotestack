"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import useFormData from "@/app/hooks/useFormData";
import Image from "next/image";
import { useState } from "react";
import { BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Form = () => {
  const { add } = useFormData();

  const [contactData, setContactData] = useState({
    email: "",
    company: "",
    name: "",
    contact: "",
  });
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 place-items-start">
      <div className="flex flex-col gap-6">
        <header className="text-3xl font-bold">
          When do you need the developer to start?
        </header>
        <form className="flex flex-col gap-4">
          <Input
            required
            icon={<MdEmail className="h-full w-full" />}
            placeholder="Email Address"
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
          />
          <Input
            required
            icon={<FaIndustry className="h-full w-full" />}
            placeholder="Company Name"
            onChange={(e) =>
              setContactData({ ...contactData, company: e.target.value })
            }
          />
          <Input
            required
            icon={<BsFillPersonFill className="h-full w-full" />}
            placeholder="Contact Name"
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
          <Input
            required
            icon={<BsPhoneFill className="h-full w-full" />}
            placeholder="Phone Number (+91 932......0)"
            onChange={(e) =>
              setContactData({ ...contactData, contact: e.target.value })
            }
          />
          <Button
            onClick={() => {
              add({ stage: 2, data: contactData });
              setContactData({
                email: "",
                company: "",
                name: "",
                contact: "",
              });
            }}
            label="Find the developers you'll like"
          />
        </form>
      </div>
      <div className="relative hidden md:grid w-full h-full place-items-center overflow-hidden">
        <Image
          src="/images/side-image.png"
          alt="Programmer"
          fill
          sizes="600"
          className="w-auto h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Form;
