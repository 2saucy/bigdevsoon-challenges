const RateUs = () => {
  const rates = [
    {
      icon: "🤮",
      label: "Terrible",
    },
    {
      icon: "😔",
      label: "Bad",
    },
    {
      icon: "😐",
      label: "Okay",
    },
    {
      icon: "😊",
      label: "Good",
    },
    {
      icon: "😍",
      label: "Great",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-300">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-12 shadow-lg">
        <h1 className="text-4xl font-bold">Rate Us!</h1>
        <p>Tell us about your experience</p>
        <div className="flex items-center gap-4">
          {rates.map((rate) => (
            <div className="flex flex-col items-center gap-2" key={rate.label}>
              <span className="cursor-pointer text-6xl grayscale duration-200 ease-in-out hover:grayscale-0">
                {rate.icon}
              </span>
              <span className="text-sm">{rate.label}</span>
            </div>
          ))}
        </div>
        <a href="#" className="text-red-400 hover:underline">
          Skip
        </a>
      </div>
    </main>
  );
};

export default RateUs;
