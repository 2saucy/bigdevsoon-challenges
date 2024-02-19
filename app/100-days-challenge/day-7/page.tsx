"use client";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { MdMessage, MdVisibility } from "react-icons/md";

const Page = () => {
  return (
    <main className="relative h-screen antialiased">
      <img
        className="h-full w-full object-cover"
        src="/assets/100-days-challenge/day-7/background.jpg"
      />
      <div className="absolute top-1/2 max-sm:p-4 sm:ml-12 -translate-y-1/2 max-sm:w-full md:w-[450px]">
        <div className="space-y-2">
          <span className="text-sm font-black uppercase text-[#939393]">
            start for free
          </span>
          <h1 className="text-4xl font-bold">Create new account</h1>
        </div>
        <FormContainer />
      </div>
    </main>
  );
};

export default Page;


const FormContainer = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    console.log(formValues);
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 flex flex-col gap-4">
      <div className="flex gap-4">
        <InputContainer
          className="basis-1/2"
          label="First name"
          name="firstName"
          onChange={onChange}
          icon={<FaIdCard className="flex-shrink-0 opacity-50" />}
        />
        <InputContainer
          className="basis-1/2"
          label="Last name"
          name="lastName"
          onChange={onChange}
          icon={<FaIdCard className="flex-shrink-0 opacity-50" />}
        />
      </div>
      <InputContainer
        label="Email"
        name="email"
        onChange={onChange}
        icon={<MdMessage className="flex-shrink-0 opacity-50" />}
      />
      <InputContainer
        label="Password"
        name="password"
        onChange={onChange}
        icon={<MdVisibility className="flex-shrink-0 opacity-50" />}
      />
      <p className="font-bold text-[#939393]">
        Already have an account?{" "}
        <a className="text-[#406afe] hover:underline" href="#">
          Sign In
        </a>
      </p>
      <button className="rounded-full bg-[#406afe] py-2 text-slate-50 shadow-lg shadow-slate-400 duration-300 ease-in-out hover:scale-105">
        Create account
      </button>
    </form>
  )
}

const InputContainer = ({
  label,
  icon,
  name,
  className,
  onChange
}: {
  label: string;
  icon: JSX.Element;
  name: string;
  className?: string;
  onChange?: (e: any) => void
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-2 rounded-lg border-2 px-2 py-1 shadow-sm",
        className,
        isFocused
          ? "border-[#2d5bff] bg-white"
          : "border-transparent bg-[#e9ebf8]",
      )}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor={name}
          className={clsx(
            "text-[0.6rem] font-bold",
            isFocused ? "text-[#2d5bff]" : "text-[#939393]",
          )}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="tracking-wider w-full bg-transparent text-xs font-bold outline-none"
          type={name === "password" ? "password" : "text"}
        />
      </div>
      {icon}
    </div>
  );
};
