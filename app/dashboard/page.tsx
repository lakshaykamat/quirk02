"use client";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Large,
  Lead,
  Muted,
  Small,
} from "@/components/Typography";
import { Calendar } from "@/components/ui/calendar";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

type Props = {};
function convertStringToDate(dateString: string): Date {
  const dateParts: string[] = dateString.split("-");

  if (dateParts.length !== 3) {
    // Check if the date string has correct format (dd-mm-yyyy)
    console.error(
      "Invalid date format. Please provide date in dd-mm-yyyy format."
    );
    return null;
  }

  const day: number = parseInt(dateParts[0], 10);
  const month: number = parseInt(dateParts[1], 10) - 1;
  const year: number = parseInt(dateParts[2], 10);

  // Create a new Date object using the extracted components
  const date: Date = new Date(year, month, day);

  if (isNaN(date.getTime())) {
    // Check if the date is valid
    console.error("Invalid date. Please provide a valid date.");
    return null;
  }

  return date;
}
const Home = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const footer = date ? (
    <p>You selected {date.toString()}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  return (
    <section>
      <Heading1>Dashboard</Heading1>
      <main className="flex sm:flex-row flex-col items-center sm:justify-around gap-12 mt-6">
        <Card className="flex-1 w-full sm:w-auto rounded-md py-1 px-1 sm:px-6 sm:py-3">
          <CardHeader>
            <Heading2>Habits</Heading2>
          </CardHeader>

          <CardBody className="flex flex-col gap-6">
            <HabitCardItem title={"Wakeup early morning"} isCompleted={false} />
            <HabitCardItem title={"Go to the fcking gym"} isCompleted />
            <HabitCardItem
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

const HabitCardItem = ({
  title,
  isCompleted,
}: {
  title: string;
  isCompleted: boolean;
}) => {
  return (
    <>
      {/* <Button>
      <div
        className={`w-full outline outline-2 outline-secondary-400 rounded-md  p-3 ${
          isCompleted ? "bg-success-300 text-gray-900" : "text-gray-400"
        }`}
      >
        <div className="flex items-center gap-3">
          <CircleSvg />
          <div>
            <Small>{title}</Small>
          </div>
        </div>
      </div>
    </Button> */}
      <Button
        className={`px-3 py-7 ${
          isCompleted && "bg-success-400 dark:bg-success-200"
        }`}
        variant="faded"
      >
        <div className="w-full gap-3 items-center text-start flex">
          <CircleSvg /> <span className="font-bold">{title}</span>
        </div>
      </Button>
    </>
  );
};

const CircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};
export default Home;
