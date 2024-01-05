import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createNewHabit = async (data: any) => {
  const habit = await prisma.habit.create({
    data: {
      ...data,
    },
  });
  return habit;
};

export const getAllHabits = async () => {
  const habits = await prisma.habit.findMany({});
  //console.log(habits);
  return habits;
};

export const getHabitById = async (id: string) => {
  try {
    const habits = await prisma.habit.findUnique({
      where: { id },
    });

    return habits;
  } catch (error: any) {
    return { error: error?.meta?.message };
  }
};
