import { Heading1 } from "@/components/Typography";
import { getHabitByID } from "@/lib/utils";

const HabitPage = ({ params }: { params: { habitID: string } }) => {
  const { habitID } = params;

  const habit = getHabitByID(habitID);
  if (!habit)
    return (
      <>
        <Heading1>Not found</Heading1>
      </>
    );
  return <div>{habit.title}</div>;
};

export default HabitPage;
