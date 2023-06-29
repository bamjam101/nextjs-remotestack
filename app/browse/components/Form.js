"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import useFormData from "@/app/hooks/useFormData";

import { BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import useTechList from "@/app/hooks/useTechList";

const Form = ({ style }) => {
  const router = useRouter();
  const { technologies } = useTechList();
  const { forms, add } = useFormData();

  const [contactData, setContactData] = useState({
    email: "",
    company: "",
    name: "",
    contact: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Details saved.\nThank you for contacting RemoteStack, our team will get back to you ASAP!\nTill then keep innovating 🚀"
    );
    const data = {
      0: technologies,
      1: forms[0]?.data,
      2: forms[1]?.data,
      3: contactData,
    };
    console.log(data);
    // router.push("/");
  };
  return (
    <section
      className={`grid w-full grid-cols-1 md:grid-cols-2 gap-2 place-items-start transition duration-500 delay-150 ${style}`}
    >
      <div className="flex flex-col gap-6">
        <header className="text-2xl xl:text-3xl font-bold">
          When do you need the developer to start?
        </header>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
          <Button type={"submit"} label="Find the developers you'll like" />
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
