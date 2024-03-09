"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { IoIosArrowBack, IoIosTime } from "react-icons/io";

const MeetingSchedule = () => {
  const [activeView, setActiveView] = useState<"calendar" | "todos" | "form">(
    "calendar",
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-400">
      {activeView === "calendar" ? (
        <CalendarComponent setActiveView={setActiveView} />
      ) : activeView === "todos" ? (
        <Todos setActiveView={setActiveView} />
      ) : (
        <AddMeeting setActiveView={setActiveView} />
      )}
    </main>
  );
};

export default MeetingSchedule;

const CalendarComponent = ({
  setActiveView,
}: {
  setActiveView: (activeView: "calendar" | "todos" | "form") => void;
}) => {
  return (
    <div className="flex aspect-[1/1] w-[500px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md">
      <Calendar
        mode="single"
        onSelect={() => setActiveView("todos")}
        className="flex w-full flex-col"
        classNames={{
          root: "w-full h-full flex flex-col justify-between",
          month: "w-full space-y-4",
          table: "flex flex-col items-center",
        }}
      />
    </div>
  );
};

interface Todo {
  todo: string;
  status: "done" | "in progress" | "not started";
  timeStart: string;
  timeEnd: string;
}

const Todos = ({
  setActiveView,
}: {
  setActiveView: (activeView: "calendar" | "todos" | "form") => void;
}) => {
  const todos: Todo[] = [
    {
      todo: "Weekly Plant Care Workshop",
      status: "done",
      timeStart: "10:00 AM",
      timeEnd: "11:00 AM",
    },
    {
      todo: "Succulent Succulents Seminar",
      status: "in progress",
      timeStart: "13:00 PM",
      timeEnd: "14:00 PM",
    },
    {
      todo: "Monthly Plant Swap",
      status: "not started",
      timeStart: "14:00 PM",
      timeEnd: "15:00 PM",
    },
    {
      todo: "Weekly Plant Care Workshop",
      status: "done",
      timeStart: "10:00 AM",
      timeEnd: "11:00 AM",
    },
    {
      todo: "Succulent Succulents Seminar",
      status: "in progress",
      timeStart: "13:00 PM",
      timeEnd: "14:00 PM",
    },
    {
      todo: "Monthly Plant Swap",
      status: "not started",
      timeStart: "14:00 PM",
      timeEnd: "15:00 PM",
    },
    {
      todo: "Weekly Plant Care Workshop",
      status: "done",
      timeStart: "10:00 AM",
      timeEnd: "11:00 AM",
    },
    {
      todo: "Succulent Succulents Seminar",
      status: "in progress",
      timeStart: "13:00 PM",
      timeEnd: "14:00 PM",
    },
    {
      todo: "Monthly Plant Swap",
      status: "not started",
      timeStart: "14:00 PM",
      timeEnd: "15:00 PM",
    },
  ];

  return (
    <div className="aspect-[1/1] w-[500px] space-y-4 rounded-xl bg-white p-4 shadow-md">
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setActiveView("calendar")}
      >
        <IoIosArrowBack />
      </Button>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Button
          variant="secondary"
          size="icon"
          className="bg-[#f1ff4f] text-black"
          onClick={() => setActiveView("form")}
        >
          <FaPlus className="h-4 w-4" />
        </Button>
      </div>
      <div className="h-full space-y-4 overflow-y-scroll rounded-xl bg-slate-100 p-4">
        {todos.map(({ todo, status, timeStart, timeEnd }, i) => {
          const statusColor = {
            done: "bg-green-400",
            "in progress": "bg-yellow-400",
            "not started": "bg-red-400",
          };

          return (
            <div key={i} className="flex items-center justify-between gap-4">
              <span className="aspect-square rounded-full bg-slate-500 px-2" />
              <div className="flex-1">
                <h2 className="font-semibold">{todo}</h2>
                <p className="text-sm opacity-50">
                  {timeStart} - {timeEnd}
                </p>
              </div>
              <Badge
                variant="outline"
                className={clsx("text-slate-50", statusColor[status])}
              >
                {status
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FormSchema = z.object({
  title: z.string(),
  meeting_date: z.date({
    required_error: "A date of meeting is required",
  }),
  meeting_start: z.string(),
  meeting_end: z.string(),
});

const AddMeeting = ({
  setActiveView,
}: {
  setActiveView: (activeView: "calendar" | "todos" | "form") => void;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <div className="aspect-[1/1] w-[500px] space-y-4 rounded-xl bg-white p-4 shadow-md">
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setActiveView("todos")}
      >
        <IoIosArrowBack />
      </Button>
      <h1 className="text-2xl font-bold">Add meeting</h1>
      <Form {...form}>
        <form
          className="flex h-full flex-col justify-between gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="meeting_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex items-center gap-2">
                    <FaCalendarAlt />
                    Date of meeting
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline">
                          {field.value ? (
                            <span className="mr-auto font-light">
                              {format(field.value, "PPP")}
                            </span>
                          ) : (
                            <span className="mr-auto font-light">
                              Pick a date
                            </span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="meeting_start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <IoIosTime />
                      Starts At
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="11:00 PM" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="meeting_end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <IoIosTime />
                      Ends At
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="12:00 PM" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full bg-[#f1ff4f] font-semibold text-black shadow-lg"
            type="submit"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};
