"use client";
import { Heading1, Heading2 } from "@/components/Typography";
import { Calendar } from "@/components/ui/calendar";
import { formatDate } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import HabitTodo from "./HabitTodoItem";

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section>
      <Heading1>{formatDate(Date.now())}</Heading1>
      <main className="flex sm:flex-row flex-col items-center sm:justify-around gap-12 mt-6">
        <Card className="flex-1 w-full sm:w-auto rounded-md py-1 px-1 sm:px-6 sm:py-3">
          <CardHeader>
            <Heading2>Habits</Heading2>
          </CardHeader>

          <CardBody className="flex flex-col gap-6">
            <HabitTodo title={"Wakeup early morning"} isCompleted={false} />
            <HabitTodo title={"Go to the fcking gym"} isCompleted />
            <HabitTodo
              title={"Solve 2 leetcode problems"}
              isCompleted={false}
            />
          </CardBody>
        </Card>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </main>
    </section>
  );
};
export default Home;
