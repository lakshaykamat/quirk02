import { Heading1 } from "@/components/Typography";
import { SAMPALE_HABITS } from "@/public/assets/data";
import HabitCard from "./HabitCard";

const HabitsPage = () => {
  return (
    <div>
      <Heading1>Habits</Heading1>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {SAMPALE_HABITS.map((habitItem) => {
          return (
            <HabitCard
              id={habitItem.id}
              category={habitItem.category}
              title={habitItem.title}
              streak={habitItem.streak}
            />
          );
        })}
      </section>
    </div>
  );
};

export default HabitsPage;
