interface Plan {
  plan: string
  pricing: number
  features: string[]

}

const PricingPlans = () => {
  const plans: Plan[] = [
    {
      plan: "Professional",
      pricing: 39.99,
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
      pricing: 29.99,
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
      pricing: 49.99,
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
    <main className="min-h-screen bg-slate-50 flex flex-col items-center gap-16 pt-8">
      <div className="text-center">
        <span>Find ideal plan</span>
        <h1 className="text-5xl">Unlock <span className="text-violet-500">Your Best-Fit</span> Plan Today</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {plans.map(p => (
          <PricingCard key={p.plan} {...p} />
        ))}
      </div>
    </main>
  );
}

export default PricingPlans;


const PricingCard = ({ plan, pricing, features }: Plan) => {
  return (
    <div className="rounded-xl shadow-lg flex flex-col gap-4 bg-white p-6">
      <div>
        <h1 className="text-2xl font-bold">{plan}</h1>
        <span>${pricing}/month</span>
      </div>
      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} >
            <div className="px-1 aspect-square bg-black rounded-full" /> 
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-8 bg-yellow-400 rounded-xl py-4">
        Try free for 30 days
      </button>
    </div>
  )
}