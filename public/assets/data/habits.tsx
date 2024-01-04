import { generateUUID } from "@/lib/utils";
import { Code2, Dumbbell, Smartphone } from "lucide-react";

export const CATEGORIES = {
  gym: {
    label: "Gym and Workout",
    icon: <Dumbbell className="stroke-gray-200 w-5 h-5" />,
    color: "#0f766e", //teal-700
  },
  study: {
    label: "Deep work",
    icon: <Code2 className="stroke-gray-200 w-5 h-5" />,
    color: "#a21caf", //sky-700
  },
  gadgets: {
    label: "Electronics",
    icon: <Smartphone className="stroke-gray-200 w-5 h-5" />,
    color: "#4338ca", //indigo-700
  },
};

export const SAMPALE_HABITS = [
  {
    id: generateUUID(),
    title: "Wakeup early",
    category: CATEGORIES.gym,
    streak: 10,
  },
  {
    id: generateUUID(),
    title: "Use less phone",
    category: CATEGORIES.gadgets,
    streak: 89,
  },
  {
    id: generateUUID(),
    title: "Coding",
    category: CATEGORIES.study,
    streak: 12,
  },
];
