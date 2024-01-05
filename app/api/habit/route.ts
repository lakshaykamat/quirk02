import { getHabitByID } from "@/lib/utils";
import { createNewHabit, getAllHabits, getHabitById } from "@/prisma/habits";
import { NextResponse } from "next/server";

export async function GET() {
  const req = {
    title: "Wakeup early",
    category: "gym",
    streak: "10",
  };
  //6597b13bf51ab76bcc86405c
  //const input = await createNewHabit(req);
  const data = await getAllHabits();
  return NextResponse.json({ data });
}
