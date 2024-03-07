"use client";
import clsx from "clsx";
import { useState } from "react";

interface Plan {
  plan: string;
  pricing: {
    monthly: number;
    annualy: number;
  };
  features: string[];
}

const PricingPlans = () => {
  const [isMonthlyPrices, setIsMonthlyPrices] = useState(true);
  const plans: Plan[] = [
    {
      plan: "Professional",
      pricing: {
        monthly: 39.99,
        annualy: 399.99,
      },
      features: [
        "All core features",
        "Priority support",
        "Quarterly reviews",
        "Custom branding",
        "10GB storage",
      ],
    },
    {
      plan: "Standard",
      pricing: {
        monthly: 29.99,
        annualy: 299.99,
      },
      features: [
        "Most core features",
        "Email support",
        "Annual reviews",
        "Limited branding",
        "5GB storage",
      ],
    },
    {
      plan: "Ultimate",
      pricing: {
        monthly: 49.99,
        annualy: 499.99,
      },
      features: [
        "All features, including premium",
        "24/7 priority support",
        "Dedicated account manager",
        "Fully customizable branding",
        "Unlimited storage",
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 bg-slate-100 p-8">
      <div className="text-center">
        <span>Find ideal plan</span>
        <h1 className="text-5xl">
          Unlock <span className="text-violet-500">Your Best-Fit</span> Plan
          Today 🔥
        </h1>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className={isMonthlyPrices ? "opacity-50" : "opacity-100"}>
            Billed annually
          </span>
          <ToggleSwitch
            isActive={isMonthlyPrices}
            toggle={() => setIsMonthlyPrices(!isMonthlyPrices)}
          />
          <span className={isMonthlyPrices ? "opacity-100" : "opacity-50"}>
            Billed monthly
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {plans.map((p) => (
          <PricingCard
            key={p.plan}
            {...p}
            isBestValue={p.plan === "Professional"}
            isMonthlyPrices={isMonthlyPrices}
          />
        ))}
      </div>
    </main>
  );
};

export default PricingPlans;

interface PricingCardProps extends Plan {
  isBestValue?: boolean;
  isMonthlyPrices: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  pricing,
  features,
  isBestValue,
  isMonthlyPrices,
}) => {
  return (
    <div
      className={clsx(
        "relative flex h-[600px] flex-col gap-4 overflow-hidden rounded-2xl p-6 shadow-lg duration-300 ease-out hover:scale-105",
        isBestValue
          ? "bg-gradient-to-t from-fuchsia-500 to-indigo-600 text-slate-50"
          : "bg-white",
      )}
    >
      {isBestValue && (
        <div className="absolute -right-12 w-[200px] rotate-45 bg-red-500 py-1.5 text-center text-xs font-bold">
          <span>Best value</span>
        </div>
      )}
      <h1 className="text-3xl font-bold">{plan}</h1>
      <p className="text-lg font-semibold tracking-wide">
        ${pricing[isMonthlyPrices ? "monthly" : "annualy"]}
        <span className="text-base opacity-70">/month</span>
      </p>
      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-3xl font-black">·</span>
            <span className="opacity-70">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto rounded-xl bg-black py-4 text-slate-50 hover:bg-slate-200 hover:text-slate-900">
        Try free for 30 days
      </button>
    </div>
  );
};

const ToggleSwitch = ({
  isActive,
  toggle,
}: {
  isActive: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      type="button"
      className="relative h-[30px] w-[55px] rounded-full bg-slate-700 duration-150 ease-in"
      onClick={toggle}
    >
      <div
        className={clsx(
          "absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 shadow-md duration-300 ease-in-out",
          isActive ? "left-3/4" : "left-1/4",
        )}
      />
    </button>
  );
};
