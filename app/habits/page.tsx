import {
  Heading1,
  Heading2,
  Heading3,
  Large,
  Small,
} from "@/components/Typography";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";

type Props = {};

const Habts = (props: Props) => {
  return (
    <div>
      <Heading1>Habits</Heading1>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </section>
    </div>
  );
};

const HabitCard = () => {
  return (
    <Card className="rounded-md p-3">
      <CardHeader className="flex gap-3 flex-wrap justify-start items-center">
        <div className="outline-1 p-2 bg-blue-500 rounded-md">
          <GYM />
        </div>
        <Large>Wakeup early morning</Large>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
          <Fire />
         Streak 10
          </div>
         Frequency: 3 in day
        </div>
        <div className="mt-3">
        <Small>Started on 12 Dec</Small>
        </div>
      </CardBody>
    </Card>
  );
};

const Fire = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide fill-yellow-500 lucide-flame"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
};

const GYM = () => {
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
      className="lucide stroke-black lucide-dumbbell"
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  );
};
export default Habts;
