"use client";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GrNext, GrPrevious, GrTransaction } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Card, Transaction } from "../types";
import { SiMastercard, SiVisa } from "react-icons/si";

const CardWallet = () => {
  const [formActive, setFormActive] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#ececf6]">
      {formActive ? (
        <AddCardForm setFormActive={setFormActive} />
      ) : (
        <Home setFormActive={setFormActive} />
      )}
    </main>
  );
};

export default CardWallet;

const Home = ({
  setFormActive,
}: {
  setFormActive: (bool: boolean) => void;
}) => {
  const transactions: Transaction[] = [
    {
      id: 1,
      amount: -50.25,
      date: "2024-02-28",
      card_id: 1,
      description: "Grocery shopping",
    },
    {
      id: 2,
      amount: -100.5,
      date: "2024-03-01",
      card_id: 1,
      description: "Clothing store purchase",
    },
    {
      id: 3,
      amount: -120,
      date: "2024-03-02",
      card_id: 1,
      description: "Utility bill payment",
    },

    {
      id: 4,
      amount: -200,
      date: "2024-02-29",
      card_id: 2,
      description: "Hotel reservation",
    },
    {
      id: 5,
      amount: -150,
      date: "2024-03-01",
      card_id: 2,
      description: "Airline ticket purchase",
    },
    {
      id: 7,
      amount: 300,
      date: "2024-02-29",
      card_id: 2,
      description: "Online sale",
    },

    {
      id: 11,
      amount: -350,
      date: "2024-03-01",
      card_id: 3,
      description: "Auto insurance payment",
    },
    {
      id: 9,
      amount: 280,
      date: "2024-03-02",
      card_id: 3,
      description: "Refund received",
    },
    {
      id: 6,
      amount: -180,
      date: "2024-03-02",
      card_id: 3,
      description: "Membership fee payment",
    },

    {
      id: 10,
      amount: -400,
      date: "2024-02-29",
      card_id: 4,
      description: "Appliance purchase",
    },
    {
      id: 8,
      amount: 250,
      date: "2024-03-01",
      card_id: 4,
      description: "Payment received",
    },
    {
      id: 12,
      amount: -380,
      date: "2024-03-02",
      card_id: 4,
      description: "Electronics store purchase",
    },
  ];

  const cards: Card[] = [
    {
      id: 1,
      balance: 500.0,
      card_number: "**** **** **** 1234",
      card_type: "Visa",
      expiry_date: "10/24",
      transactions: transactions.filter((t) => t.card_id === 1),
      is_default: true,
    },
    {
      id: 2,
      balance: 250.5,
      card_number: "**** **** **** 5678",
      card_type: "Mastercard",
      expiry_date: "12/25",
      transactions: transactions.filter((t) => t.card_id === 2),
      is_default: false,
    },
    {
      id: 3,
      balance: 10.0,
      card_number: "**** **** **** 3214",
      card_type: "Visa",
      expiry_date: "10/24",
      transactions: transactions.filter((t) => t.card_id === 3),
      is_default: false,
    },
    {
      id: 4,
      balance: 4050.5,
      card_number: "**** **** **** 1234",
      card_type: "Mastercard",
      expiry_date: "12/25",
      transactions: transactions.filter((t) => t.card_id === 4),
      is_default: false,
    },
  ];

  const [activeCard, setActiveCard] = useState<Card>(
    cards.filter((card) => card.is_default)[0],
  );
  const currentIndex = cards.findIndex((card) => card.id === activeCard.id);

  const onNext = () => {
    if (currentIndex < cards.length - 1) {
      setActiveCard(cards[currentIndex + 1]);
    }
  };

  const onPrev = () => {
    if (currentIndex > 0) {
      setActiveCard(cards[currentIndex - 1]);
    }
  };

  return (
    <Container>
      <div className="space-y-6 bg-black p-6 text-slate-50">
        <div className="space-y-2">
          <span className="font-light">Welcome</span>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">My Cards</h1>
            <button
              onClick={() => setFormActive(true)}
              className="rounded-full p-2  text-slate-50 ease-in-out hover:bg-slate-50/20"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        {cards.length > 0 ? (
          <>
            <div className="flex items-center gap-4">
              <button onClick={onPrev}>
                <GrPrevious />
              </button>
              <CreditCard {...activeCard} />
              <button onClick={onNext}>
                <GrNext />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 pr-4">
              {cards.map((card) => {
                return (
                  <Dot key={card.id} isActive={card.id === activeCard.id} />
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-sm font-light">You dont have any cards yet</p>
        )}
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-xl font-bold">Transactions</h2>
        <TransactionsList transactions={activeCard?.transactions || []} />
      </div>
    </Container>
  );
};

export interface AddCardFormValues {
  name: string;
  number: string;
  expiry: string;
  cvc: string;
  default: boolean;
}

const AddCardForm = ({
  setFormActive,
}: {
  setFormActive: (bool: boolean) => void;
}) => {
  const [formValues, setFormValues] = useState<AddCardFormValues>({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    default: false,
  });

  const onSubmit = () => {
    console.log(formValues);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDefault = () => {
    setFormValues({
      ...formValues,
      default: !formValues.default,
    });
  };

  return (
    <Container className="p-4">
      <button className="mt-2" onClick={() => setFormActive(false)}>
        <IoMdArrowRoundBack className="h-6 w-6" />
      </button>
      <h1 className="text-3xl font-semibold">Add a card</h1>
      <form
        onSubmit={onSubmit}
        className="flex h-full flex-col justify-between gap-4 pt-6"
      >
        <div className="space-y-4">
          <input
            className="w-full rounded-lg border-2 px-3 py-2"
            value={formValues.name}
            name="name"
            onChange={onChange}
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full rounded-lg border-2 px-3 py-2"
            value={formValues.number}
            name="number"
            onChange={onChange}
            type="text"
            placeholder="Card Number"
          />
          <div className="flex items-center gap-4">
            <input
              className="w-full rounded-lg border-2 px-3 py-2"
              value={formValues.expiry}
              name="expiry"
              onChange={onChange}
              type="text"
              placeholder="MM/YY"
            />
            <input
              className="w-full rounded-lg border-2 px-3 py-2"
              value={formValues.cvc}
              name="cvc"
              onChange={onChange}
              type="text"
              placeholder="CVC Code"
            />
          </div>
          <div className="flex items-center gap-4">
            <ToggleSwitch
              isDefault={formValues.default}
              toggleDefault={toggleDefault}
            />
            <span>Set as default card</span>
          </div>
        </div>
        <button
          className="w-full rounded-lg bg-black py-2 text-slate-50 shadow-md"
          type="submit"
        >
          Add New Card
        </button>
      </form>
    </Container>
  );
};

const ToggleSwitch = ({
  isDefault,
  toggleDefault,
}: {
  isDefault: boolean;
  toggleDefault: () => void;
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "relative h-[30px] w-[55px] rounded-full duration-150 ease-in",
        isDefault ? " bg-emerald-400" : "bg-slate-300",
      )}
      onClick={toggleDefault}
    >
      <div
        className={clsx(
          "absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 shadow-md duration-300 ease-in-out",
          isDefault ? "left-3/4" : "left-1/4",
        )}
      />
    </button>
  );
};

const Dot = ({ isActive }: { isActive: boolean }) => {
  return (
    <span
      className={clsx(
        "aspect-square rounded-full px-1.5",
        isActive ? "bg-emerald-400" : "bg-slate-600",
      )}
    />
  );
};

const TransactionsList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div className="mt-4 flex h-full flex-col gap-4 overflow-y-scroll rounded-lg bg-white p-4">
      {transactions.map((t, i) => (
        <Transaction key={i} {...t} />
      ))}
    </div>
  );
};

const Transaction = ({
  amount,
  date,
  description,
}: {
  amount: number;
  date: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <GrTransaction />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col">
          <p>{description}</p>
          <p className="text-sm font-light">{date}</p>
        </div>
        <span
          className={clsx(
            "rounded-xl px-1.5 py-0.5 text-xs tracking-wider",
            amount > 0
              ? "bg-emerald-600 text-slate-50"
              : " bg-red-600 text-slate-50",
          )}
        >
          {amount > 0 ? "+" : "-"}${Math.abs(amount)}
        </span>
      </div>
    </div>
  );
};

const CreditCard = ({
  balance,
  card_number,
  card_type,
  expiry_date,
  is_default,
}: {
  balance: number;
  card_number: string;
  card_type: string;
  expiry_date: string;
  is_default: boolean;
}) => {
  const type =
    card_type.toLowerCase() === "visa" ? (
      <SiVisa className="absolute bottom-0 right-4 h-20 w-20" />
    ) : (
      <SiMastercard className="absolute bottom-0 right-4 h-20 w-20" />
    );

  return (
    <div
      className={clsx(
        "relative aspect-video w-full rounded-xl bg-red-400 bg-gradient-to-b from-cyan-400 via-violet-600 to-fuchsia-600 p-6",
        is_default && "outline outline-offset-4 outline-emerald-400",
      )}
    >
      <h3 className="text-sm">Balance</h3>
      <p className="text-xl">${balance.toFixed(2)}</p>
      <span className="tracking-wider">{card_number}</span>
      <div className="flex flex-col">
        <h3 className="text-sm">Expires</h3>
        <p className="text-xs font-light">{expiry_date}</p>
      </div>
      {type}
    </div>
  );
};

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex h-[800px] w-[500px] flex-col space-y-2 overflow-hidden rounded-3xl bg-slate-50",
        className,
      )}
    >
      {children}
    </div>
  );
};
