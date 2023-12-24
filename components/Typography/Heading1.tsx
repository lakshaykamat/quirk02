type Props = {
  className?: String;
  children: React.ReactNode;
};
export function Heading1(props: Props) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${props.className}`}
    >
      {props.children}
    </h1>
  );
}
