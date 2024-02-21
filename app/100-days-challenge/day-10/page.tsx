"use client";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-evenly gap-8 bg-day-10 bg-cover p-8 max-lg:flex-col">
      <Card>
        <div className="space-y-4">
          <GoogleButton />
          <SignUpButton>
            <MdOutlineEmail className="h-4 w-4" />
            Sign up with Email
          </SignUpButton>
          <p className="text-center ">
            Already have an account?{" "}
            <a href="#" className="text-[#204cfd] hover:underline">
              Log In
            </a>
          </p>
        </div>
      </Card>
      <Card>
        <FormContainer />
      </Card>
    </main>
  );
};

export default Page;

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit rounded-2xl bg-[#f2f2f2] p-8 shadow-2xl lg:w-[450px]">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Sign Up</h1>
        <p className="text-xs">
          Join us now! Sign up to kick-start your journey.
        </p>
      </div>
      {children}
    </div>
  );
};

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <InputContainer
          text="Name"
          type="text"
          placeholder="Name"
          name="name"
          onChange={onChange}
          value={formData.name}
        />
        <InputContainer
          text="Email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={formData.email}
        />
        <InputContainer
          text="Password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={formData.password}
        />
        <SignUpButton>Sign Up</SignUpButton>
      </form>
      <p className="my-4 text-center">
        Already have an account?{" "}
        <a href="#" className="text-[#204cfd] hover:underline">
          Log In
        </a>
      </p>
      <GoogleButton />
    </div>
  );
};

const InputContainer = ({
  text,
  type,
  placeholder,
  name,
  onChange,
  value,
}: {
  text: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "relative flex h-[45px] rounded-md border-2 p-2 duration-100 ease-in-out",
        isFocused && "border-slate-600",
      )}
    >
      {isFocused && (
        <span className="absolute -top-2 left-1 mx-1 bg-[#f2f2f2] text-xs font-semibold text-slate-600">
          {text}
        </span>
      )}
      <input
        className="w-full bg-transparent text-xs outline-none"
        type={type === "password" ? (isVisible ? "text" : "password") : type}
        placeholder={placeholder}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      {type !== "password" ? null : !isVisible ? (
        <button type="button" onClick={() => setIsVisible(true)}>
          <TbEyeClosed className="h-4 w-4 text-gray-400" />
        </button>
      ) : (
        <button type="button" onClick={() => setIsVisible(false)}>
          <TbEye className="h-4 w-4 text-gray-400" />
        </button>
      )}
    </div>
  );
};

const SignUpButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex h-[45px] w-full items-center justify-center gap-2 rounded-lg bg-[#12273e] text-xs text-slate-50 shadow-lg">
      {children}
    </button>
  );
};

const GoogleButton = () => {
  return (
    <button
      type="submit"
      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 py-2 duration-75 ease-in-out hover:bg-slate-50"
      onClick={() => console.log("Sign Up with Google")}
    >
      <FcGoogle />
    </button>
  );
};
