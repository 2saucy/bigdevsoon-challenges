"use client"
import clsx from "clsx"
import { useState } from "react"

interface Plan {
  plan: string
  pricing: {
    monthly: number
    annualy: number
  }
  features: string[]

}

const PricingPlans = () => {
  const [isMonthlyPrices, setIsMonthlyPrices] = useState(true);
  const plans: Plan[] = [
    {
      plan: "Professional",
      pricing: {
        monthly: 39.99,
        annualy: 399.99
      },
      features: [
        "All core features",
        "Priority support",
        "Quarterly reviews",
        "Custom branding",
        "10GB storage"
      ]
    },
    {
      plan: "Standard",
      pricing: {
        monthly: 29.99,
        annualy: 299.99
      },
      features: [
        "Most core features",
        "Email support",
        "Annual reviews",
        "Limited branding",
        "5GB storage"
      ]
    },
    {
      plan: "Ultimate",
      pricing: {
        monthly: 49.99,
        annualy: 499.99
      },
      features: [
        "All features, including premium",
        "24/7 priority support",
        "Dedicated account manager",
        "Fully customizable branding",
        "Unlimited storage"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-16 p-8">
      <div className="text-center">
        <span>Find ideal plan</span>
        <h1 className="text-5xl">Unlock <span className="text-violet-500">Your Best-Fit</span> Plan Today 🔥</h1>
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className={isMonthlyPrices ? "opacity-50" : "opacity-100"}>Billed annually</span>
          <ToggleSwitch isActive={isMonthlyPrices} toggle={() => setIsMonthlyPrices(!isMonthlyPrices)}  />
          <span className={isMonthlyPrices ? "opacity-100" : "opacity-50"}>Billed monthly</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {plans.map(p => (
          <PricingCard key={p.plan} {...p} isBestValue={p.plan === "Professional"} isMonthlyPrices={isMonthlyPrices} />
        ))}
      </div>
    </main>
  );
}

export default PricingPlans;

interface PricingCardProps extends Plan {
  isBestValue?: boolean
  isMonthlyPrices: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, pricing, features, isBestValue, isMonthlyPrices }) => {
  return (
    <div className={clsx(
      "rounded-2xl shadow-lg flex flex-col gap-4 p-6 h-[600px] relative overflow-hidden hover:scale-105 duration-300 ease-out",
      isBestValue ? "bg-gradient-to-t from-fuchsia-500 to-indigo-600 text-slate-50" : "bg-white",
    )}>
      {isBestValue && (
        <div className="font-bold rotate-45 bg-red-500 absolute -right-12 text-center w-[200px] text-xs py-1.5">
          <span>Best value</span>
        </div>
      )}
      <h1 className="text-3xl font-bold">{plan}</h1>
      <p className="text-lg font-semibold tracking-wide">${pricing[isMonthlyPrices ? "monthly" : "annualy"]}<span className="opacity-70 text-base">/month</span></p>
      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="font-black text-3xl">·</span>
            <span className="opacity-70">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto rounded-xl py-4 bg-black text-slate-50 hover:bg-slate-200 hover:text-slate-900">
        Try free for 30 days
      </button>
    </div>
  )
}

const ToggleSwitch = ({ isActive, toggle }: { isActive: boolean; toggle: () => void }) => {
  return (
    <button
      type="button"
      className="relative h-[30px] w-[55px] rounded-full duration-150 ease-in bg-slate-700"
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