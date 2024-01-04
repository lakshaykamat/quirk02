import { cn } from "@/lib/utils";

type Props = {
  className?: String;
  children: React.ReactNode;
};

export function Large(props: Props) {
  return (
    <div className={cn(`text-lg font-semibold`, props.className)}>
      {props.children}
    </div>
  );
}
