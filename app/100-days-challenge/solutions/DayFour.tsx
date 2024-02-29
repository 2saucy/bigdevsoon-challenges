"use client";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

const DayFour = () => {
  return (
    <main className="flex h-screen items-center gap-20 bg-gradient-to-b from-violet-500 to-fuchsia-900 px-20 antialiased">
      <div className="flex h-[620px] flex-col gap-16 text-white">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className=" font-light tracking-wide">
            Get in touch with us! Whether you have questions, feedbacks, or just
            want to say hello, we{"'"}re here for you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative w-full space-y-1 rounded-xl bg-[#ff007a] p-3">
            <h2>Windler, Lockman and McClure</h2>
            <p className="text-sm font-thin">3629 N Cole Rd, Boise, Illnois</p>
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 border-l-[25px] border-r-[25px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#ff007a]" />
          </div>
          <Dot />
        </div>
      </div>
      <Card />
    </main>
  );
};

export default DayFour;

const Card = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    method: {
      email: true,
      phone: false,
    },
    message: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(`Submitted`);
    console.log(formData);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-[620px] w-[480px] flex-col gap-4 rounded-2xl bg-white p-8 text-sm"
    >
      <h2 className="font-semibold">Send us a Message</h2>
      <Input name="name" placeholder="Name" onChange={onChange} />
      <Input name="email" placeholder="Email" onChange={onChange} />
      <Input name="phone" placeholder="Phone" onChange={onChange} />
      <h3 className="whitespace-nowrap font-medium text-[#6d6d6d]">
        Preferred contact method of communication
      </h3>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <CircleCheckBtn
            isActive={formData.method.email}
            onClick={() =>
              setFormData({
                ...formData,
                method: { ...formData.method, email: !formData.method.email },
              })
            }
          />
          <span className="font-light text-[#6d6d6d]">Email</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleCheckBtn
            isActive={formData.method.phone}
            onClick={() =>
              setFormData({
                ...formData,
                method: { ...formData.method, phone: !formData.method.phone },
              })
            }
          />
          <span className="font-light text-[#6d6d6d]">Phone</span>
        </div>
      </div>
      <Input
        name="message"
        placeholder="Message"
        isTextArea
        onChange={onChange}
      />
      <button
        type="submit"
        className="rounded-full bg-[#ff007a] py-3 text-slate-100 duration-100 ease-in hover:bg-[#482adb]"
      >
        Submit
      </button>
    </form>
  );
};

const CircleCheckBtn = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "aspect-square h-fit rounded-full px-1 outline outline-2 outline-offset-2 outline-[#482adb] duration-150 ease-in-out",
        isActive ? "bg-[#482adb] " : "bg-transparent",
      )}
    />
  );
};

const Dot = () => {
  return (
    <span className="relative flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff007a] opacity-75" />
      <span className="relative inline-flex h-4 w-4 rounded-full bg-[#ff007a]" />
    </span>
  );
};

const Input = ({
  name,
  placeholder,
  isTextArea,
  onChange,
}: {
  name: string;
  placeholder: string;
  isTextArea?: boolean;
  onChange?: (e: any) => void;
}) => {
  const styles =
    "rounded-lg border-[1px] px-2 py-1 outline-none focus:border-[#482adb] font-light";

  if (isTextArea) {
    return (
      <textarea
        className={clsx(styles, "h-full")}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      type="text"
      className={styles}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
