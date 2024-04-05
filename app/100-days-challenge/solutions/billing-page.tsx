"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { IoMdCloudDownload, IoMdMail } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { getAssetsDir } from "../utils";

const BillingPage = () => {
  const routes = ["Plan", "Payment method", "Billing history"];
  const plans = [
    {
      name: "Standard",
      price: 29.99,
    },
    {
      name: "Pro",
      price: 39.99,
    },
    {
      name: "Ultimate",
      price: 49.99,
    },
  ];

  // User object here
  const user = {
    username: "john_doe",
    current_plan: "Pro",
    payment_methods: [
      {
        card_type: "Visa",
        card_number: "4242 4242 4242 1111",
        name: "John Doe",
        expiration: "02/24",
        cvc: "123",
        isDefault: true,
      },
      {
        card_type: "MasterCard",
        card_number: "4242 4242 4242 2222",
        name: "John Doe",
        expiration: "02/24",
        cvc: "123",
        isDefault: false,
      },
    ],
    billing_history: [
      {
        date: "04/12/2023",
        details: "Pro Plan",
        amount: 39.99,
      },
      {
        date: "04/11/2023",
        details: "Pro Plan",
        amount: 39.99,
      },
      {
        date: "04/10/2023",
        details: "Pro Plan",
        amount: 39.99,
      },
      {
        date: "04/09/2023",
        details: "Pro Plan",
        amount: 39.99,
      },
    ],
  };

  return (
    <main className="min-h-screen space-y-4 bg-slate-50 p-16">
      <h1 className="text-2xl font-semibold">Billing</h1>
      <div className="flex gap-6">
        <div className="h-fit w-fit overflow-hidden rounded-xl shadow-md">
          {routes.map((route) => (
            <div
              key={route}
              className={clsx(
                "px-4 py-2",
                route === "Plan"
                  ? "bg-[#5443e1] text-white"
                  : "bg-white text-gray-500 hover:bg-[#f3f3f3] hover:text-black",
              )}
            >
              {route}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-6 overflow-hidden rounded-xl bg-white p-6 shadow-md">
          <div>
            <h2 className="text-xl font-semibold">Plan</h2>
            <p className="opacity-50">Decide what is best for you</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {plans.map((plan, i) => (
                <PlanCard
                  key={i}
                  name={plan.name}
                  price={plan.price}
                  userCurrentPlan={user.current_plan}
                  plans={plans}
                  planIndex={i}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <p className="opacity-50">Update your billing</p>
            <div className="mt-6 flex items-center gap-2">
              {user.payment_methods.map(
                ({ card_number, isDefault, card_type }, i) => (
                  <PaymentCard
                    key={i}
                    card_type={card_type}
                    card_number={card_number}
                    isDefault
                  />
                ),
              )}
              <Button
                variant={"ghost"}
                className="aspect-square rounded-full border-2 bg-stone-100 p-0 text-stone-300 hover:border-stone-500 hover:text-stone-500"
              >
                <FaPlus className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Billing History</h2>
            <p className="opacity-50">Access to all your previous invoices</p>
            <Table className="mt-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Operation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.billing_history.map(({ date, details, amount }, i) => (
                  <TableRow key={i}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{details}</TableCell>
                    <TableCell className="text-blue-600">${amount}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <IoEyeSharp className="h-4 w-4" />
                      <IoMdCloudDownload className="h-4 w-4" />
                      <IoMdMail className="h-4 w-4" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BillingPage;

const PlanCard = ({
  name,
  price,
  userCurrentPlan,
  plans,
  planIndex,
}: {
  name: string;
  price: number;
  userCurrentPlan: string;
  plans: { name: string; price: number }[];
  planIndex: number;
}) => {
  const isSubscribed = userCurrentPlan === name;
  const indexUserPlan = plans.findIndex(
    (plan) => plan.name === userCurrentPlan,
  );
  const buttonTxt = isSubscribed
    ? "Cancel Subscription"
    : indexUserPlan > planIndex
      ? "Downgrade"
      : "Upgrade";

  return (
    <div
      className={clsx(
        "w-[400px] space-y-4 rounded-xl p-4 shadow-md",
        isSubscribed
          ? "bg-blue-50"
          : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="font-bold">
          ${price}
          <span className="font-normal opacity-50">/month</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className={clsx(
            "flex items-center gap-2",
            isSubscribed
              ? "border-2 border-blue-300 bg-transparent text-blue-300 hover:border-blue-600 hover:text-blue-600"
              : "bg-black hover:bg-white",
          )}
        >
          {buttonTxt}
        </Button>
        {!isSubscribed && (
          <a className="text-xs hover:underline" href="#">
            Learn more about this plan
          </a>
        )}
      </div>
    </div>
  );
};

const PaymentCard = ({
  card_number,
  card_type,
  isDefault,
}: {
  card_number: string;
  card_type: string;
  isDefault?: boolean;
}) => {
  const assetsDir = getAssetsDir(usePathname());
  const hiddenNumber = "**** **** **** " + card_number.slice(15, 19);

  return (
    <div className="flex items-center gap-2 rounded-xl border-2 p-6">
      <div className="h-12 w-16">
        <img
          className="h-full w-full object-cover"
          src={`${assetsDir}/${card_type.toLowerCase()}.svg`}
          alt={card_type}
        />
      </div>
      <span>{hiddenNumber}</span>
    </div>
  );
};
