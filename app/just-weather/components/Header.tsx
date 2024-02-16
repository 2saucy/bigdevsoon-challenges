import ToggleTemp from "./ToggleTemp";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4">
      <h1 className="whitespace-nowrap font-semibold text-slate-700">
        ☀️ Just Weather
      </h1>
      <input
        className="w-full rounded-lg bg-slate-100 px-4 py-1.5 text-xs shadow-md outline-none"
        placeholder="Search for cities"
        type="text"
      />
      <ToggleTemp />
    </header>
  );
};

export default Header;
