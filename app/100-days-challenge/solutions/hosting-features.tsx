import { FaShoppingCart } from "react-icons/fa";

const HostingFeatures = () => {
  const features = [
    {
      title: "E-commerce Features",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
    {
      title: "Disk Space",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
    {
      title: "Server Location",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
    {
      title: "One-Click Installers",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
    {
      title: "Script Support",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
    {
      title: "Domain Hosting",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store",
      icon: <FaShoppingCart className="h-10 w-10" />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-32 py-16">
      <span className="font-semibold text-violet-600">Features</span>
      <h1 className="text-4xl font-bold">Our Web Hosting Features</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <a key={feature.title} href="#">
            <FeatureCard {...feature} />
          </a>
        ))}
      </div>
    </main>
  );
};

export default HostingFeatures;

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-4 rounded-lg border-[1px] from-purple-500 to-pink-500 p-4 text-black duration-75 ease-in-out hover:bg-gradient-to-br hover:text-white">
      <div className="w-fit rounded-xl border-[1px] bg-white p-4 text-black">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};
