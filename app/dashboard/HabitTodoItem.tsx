import { Button } from "@nextui-org/react";
import { Circle } from "lucide-react";

type Props = {
  title: string;
  isCompleted: boolean;
};
const HabitTodo = (props: Props) => {
  return (
    <>
      <Button
        className={`px-3 py-7 ${
          props.isCompleted && "bg-success-400 dark:bg-success-200"
        }`}
        variant="faded"
      >
        <div className="w-full gap-3 items-center text-start flex">
          <Circle /> <span className="font-bold">{props.title}</span>
        </div>
      </Button>
    </>
  );
};
export default HabitTodo;
