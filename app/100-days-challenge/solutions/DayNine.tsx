"use client";
import clsx from "clsx";
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { DEFAULT_SETTINGS } from "../constants";
import { Settings, Setting } from "../types";
import toast, { Toaster } from "react-hot-toast";

const generatePassword = (settings: Settings, inputValue: number) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  let totalCharacters = "";

  if (settings[0].checked) {
    totalCharacters += chars.toUpperCase();
  }

  if (settings[1].checked) {
    totalCharacters += chars.toLocaleLowerCase();
  }

  if (settings[2].checked) {
    totalCharacters += numbers;
  }

  if (settings[3].checked) {
    totalCharacters += symbols;
  }

  let password = "";

  for (let i = 0; i < inputValue; i++) {
    password += totalCharacters.charAt(
      Math.floor(Math.random() * totalCharacters.length),
    );
  }

  return password;
};

const DayNine = () => {
  const [rangeValue, setRangeValue] = useState<number>(16);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (!generatedPassword) return;

    navigator.clipboard.writeText(generatedPassword);
    setIsCopied(true);

    toast.success("Copied to clipboard!", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  const handleReset = () => {
    setRangeValue(16);
    setSettings(DEFAULT_SETTINGS);
    setGeneratedPassword("");
  };

  const handleGeneratePassword = () => {
    setGeneratedPassword(generatePassword(settings, rangeValue));
    setIsCopied(false);
  };

  const handleSettingChange = (setting: Setting) => {
    const newSettings = [...settings];
    const index = newSettings.findIndex((s) => s.name === setting.name);
    newSettings[index].checked = !newSettings[index].checked;

    const allUnchecked = newSettings.every((s) => !s.checked);

    if (allUnchecked) {
      return;
    }

    setSettings(newSettings);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-day-9 bg-cover">
      <Toaster />
      <div className="space-y-6 rounded-2xl bg-[#090212] px-6 py-8 text-slate-50 shadow-xl">
        <h1 className="text-2xl font-semibold">Generate password</h1>
        <div className="space-y-4">
          <h2 className="text-xs uppercase opacity-50">generated password</h2>
          <Display
            generatedPassword={generatedPassword}
            handleCopy={handleCopy}
            handleReset={handleReset}
            isCopied={isCopied}
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase opacity-50">character length:</h2>
            <p className="font-semibold text-[#c45bf6]">{rangeValue}</p>
          </div>
          <InputRange rangeValue={rangeValue} setRangeValue={setRangeValue} />
        </div>
        <div className="space-y-4">
          <h2 className="text-xs uppercase opacity-50">settings</h2>
          <div className="space-y-2">
            {settings.map((setting, i) => (
              <Setting
                key={i}
                setting={setting}
                handleSettingChange={handleSettingChange}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleGeneratePassword}
          className="w-full rounded-lg bg-[#cd5fff] py-2 text-center font-bold opacity-50 duration-75 ease-in hover:opacity-100"
        >
          Generate Password
        </button>
      </div>
    </main>
  );
};

export default DayNine;

const Display = ({
  generatedPassword,
  handleCopy,
  handleReset,
  isCopied,
}: {
  generatedPassword: string;
  handleCopy: () => void;
  handleReset: () => void;
  isCopied: boolean;
}) => {
  return (
    <Container>
      <input
        className="w-full bg-transparent text-lg outline-none"
        value={generatedPassword.length > 0 ? generatedPassword : ""}
        placeholder="Generated password"
        readOnly
      />
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className={clsx(
            generatedPassword.length === 0
              ? "cursor-not-allowed text-gray-400"
              : isCopied
                ? "text-[#c45bf6]"
                : "text-[#c45bf6]/50 hover:text-[#c45bf6]",
          )}
        >
          {isCopied ? (
            <LuCopyCheck className="h-5 w-5" />
          ) : (
            <LuCopy className="h-5 w-5" />
          )}
        </button>
        <button onClick={handleReset} className="hover:text-[#c45bf6]">
          <BsArrowRepeat className="h-5 w-5" />
        </button>
      </div>
    </Container>
  );
};

const InputRange = ({
  rangeValue,
  setRangeValue,
}: {
  rangeValue: number;
  setRangeValue: (num: number) => void;
}) => {
  return (
    <Container>
      <span className="text-slate-50">6</span>
      <input
        value={rangeValue}
        onChange={(e) => setRangeValue(Number(e.target.value))}
        className="w-full"
        min={6}
        max={32}
        type="range"
      />
      <span className="text-slate-50">32</span>
    </Container>
  );
};

const Setting = ({
  setting,
  handleSettingChange,
}: {
  setting: Setting;
  handleSettingChange: (setting: Setting) => void;
}) => {
  const { name, checked } = setting;

  const toggleCheck = () => {
    handleSettingChange(setting);
  };

  return (
    <Container>
      <p>{name}</p>
      <ToggleSwitch isChecked={checked} toggleCheck={toggleCheck} />
    </Container>
  );
};

const ToggleSwitch = ({
  isChecked,
  toggleCheck,
}: {
  isChecked: boolean;
  toggleCheck: () => void;
}) => {
  return (
    <button
      onClick={() => toggleCheck()}
      className={clsx(
        "relative h-[25px] w-[40px] rounded-full bg-[#cd5fff] shadow-md before:absolute  before:aspect-square before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-50 before:px-2 before:duration-150 before:ease-in-out",
        isChecked ? "before:left-2/3" : "opacity-50 before:left-1/3",
      )}
    />
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl  bg-[#26163b] px-4 py-2.5">
      {children}
    </div>
  );
};
