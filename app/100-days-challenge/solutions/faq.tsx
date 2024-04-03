"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Card />
    </main>
  );
};

export default FAQ;

const Card = () => {
  const questions = [
    {
      question: "How do I upgrade my subscription?",
      answer:
        "You can upgrade your subscription by visiting the 'Account Settings' section in your profile.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for new users.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards and PayPal.",
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes, you can change your subscription plan at any time.",
    },
  ];

  return (
    <div className="flex w-1/3 flex-col gap-6 rounded-lg bg-white p-6 shadow-lg">
      <h1 className="text-4xl font-black">
        <span className="mr-6 font-black text-cyan-400">?</span>
        FAQs
      </h1>
      <Accordion type="multiple" className="space-y-4">
        {questions.map(({ question, answer }, i) => (
          <AccordionItem
            value={question}
            key={i}
            className="rounded-xl px-6 shadow-sm"
          >
            <AccordionTrigger className="font-bold">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
