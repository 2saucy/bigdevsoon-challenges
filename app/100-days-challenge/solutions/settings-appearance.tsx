"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { RxReset } from "react-icons/rx";

const SettingsAppearance = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-300">
      <SettingsCard />
    </main>
  );
};

export default SettingsAppearance;

const SettingsCard = () => {
  const tabs = ["Profile", "Notifications", "Appearance", "Account"];
  const accentsColors = ["Blue", "Cyan", "Gray", "Green"];
  const [activeAccentColor, setActiveAccentColor] = useState("Blue");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={clsx(
        "space-y-6 rounded-xl p-6 shadow-md",
        theme === "light"
          ? "bg-slate-50 text-slate-900"
          : "bg-slate-800 text-slate-50",
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <IoIosClose className="h-8 w-8" />
      </div>
      <hr className="my-4" />
      <ul className="flex items-center gap-4">
        {tabs.map((tab) => (
          <li
            className={
              "Appearance" === tab
                ? "text-[#8886fd] underline underline-offset-4"
                : "text-gray-400"
            }
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="font-semibold">Language</h2>
            <p className="whitespace-nowrap text-sm">
              Select the language of the application
            </p>
          </div>
          <LanguageSelect theme={theme} />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Interface Theme</h2>
            <p className="whitespace-nowrap text-sm">
              Customise your application theme
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemePreview
              themeName="Light"
              primary="bg-slate-50"
              secondary="bg-slate-200"
              theme={theme}
              setTheme={setTheme}
            />
            <ThemePreview
              themeName="Dark"
              primary="bg-slate-800"
              secondary="bg-slate-700"
              theme={theme}
              setTheme={setTheme}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="font-semibold">Language</h2>
            <p className="whitespace-nowrap text-sm">
              Select the language of the application
            </p>
          </div>
          <div className="flex items-center gap-2">
            {accentsColors.map((color) => (
              <ColorDot
                activeAccentColor={activeAccentColor}
                color={color}
                key={color}
                setActiveAccentColor={setActiveAccentColor}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RxReset />
          Reset to default
        </div>
        <div className="space-x-2">
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Save Preferences</Button>
        </div>
      </div>
    </div>
  );
};

const ThemePreview = ({
  themeName,
  primary,
  secondary,
  setTheme,
  theme,
}: {
  themeName: string;
  primary: string;
  secondary: string;
  setTheme: (theme: "light" | "dark") => void;
  theme: "light" | "dark";
}) => {
  const isActive = themeName.toLowerCase() === theme;

  return (
    <div>
      <button
        className="space-y-2"
        onClick={() => setTheme(themeName.toLowerCase() as "light" | "dark")}
      >
        <div
          className={clsx(
            "relative grid aspect-[4/3] w-[150px] shrink-0 grid-rows-3 gap-2 rounded-xl border-2 p-2 shadow-md duration-100 ease-in-out",
            primary,
            isActive && " ring-2 ring-emerald-300",
          )}
        >
          <GrRadialSelected
            className={clsx(
              "absolute right-0 top-0 text-emerald-300",
              !isActive ? "hidden" : "block",
            )}
          />
          <div className={clsx("row-span-1 rounded-lg", secondary)} />
          <div className={clsx("row-span-1 rounded-lg", secondary)} />
          <div className={clsx("row-span-1 rounded-lg", secondary)} />
        </div>
        <p className="text-xs">{themeName} theme</p>
      </button>
    </div>
  );
};

const ColorDot = ({
  activeAccentColor,
  color,
  setActiveAccentColor,
}: {
  activeAccentColor: string;
  color: string;
  setActiveAccentColor: (color: string) => void;
}) => {
  const isActive = color === activeAccentColor;

  return (
    <div>
      <button
        className={clsx(
          "h-4 w-4 rounded-full duration-100 ease-in-out",
          isActive && "ring-2 ring-emerald-300 ring-offset-1",
        )}
        style={{ backgroundColor: color }}
        onClick={() => setActiveAccentColor(color)}
      />
    </div>
  );
};

const LanguageSelect = ({ theme }: { theme: "light" | "dark" }) => {
  const languages = [
    "English",
    "Español",
    "Français",
    "Italiano",
    "日本語",
    "Portugues",
    "Русский",
  ];

  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-transparent">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent
        className={clsx(
          theme === "light"
            ? "text-salte-900 bg-slate-50"
            : "bg-slate-800 text-slate-50",
        )}
      >
        {languages.map((lang) => (
          <SelectItem value={lang} key={lang}>
            {lang}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
