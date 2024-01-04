import { FireIcon } from "@/public/assets/Icons";
import { Card } from "@nextui-org/react";
import { Large, Small } from "@/components/Typography";
import { isHexColor } from "@/lib/utils";
import Link from "next/link";
import { HabitType } from "@/types";

const HabitCard = (props: HabitType) => {
  //If color donn't exist use blue color
  const color = isHexColor(props.category.color)
    ? props.category.color
    : "#1d4ed8";

  return (
    <Card className="rounded-md p-3 hover:bg-secondary cursor-pointer">
      <div className="flex gap-6 justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className="outline-1 p-2 rounded-md"
            style={{ backgroundColor: color }}
          >
            {props.category.icon}
          </div>
          <Link href={`/habits/${props.id}`}>
            <Large className="hover:underline">{props.title}</Large>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <FireIcon />
          <Small>{props.streak}</Small>
        </div>
      </div>
    </Card>
  );
};

export default HabitCard;
