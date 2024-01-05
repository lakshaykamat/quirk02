import { Heading1 } from "@/components/Typography";
import { getAllHabits } from "@/prisma/habits";

const Home = async () => {
  const habits = await getAllHabits();

  return (
    <div>
      <Heading1>Home</Heading1>
      <p>{JSON.stringify(habits)}</p>
    </div>
  );
};

export default Home;
