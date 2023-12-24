import { Heading1 } from "@/components/Typography";
import { CardDescription } from "@/components/ui/card";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
type Props = {};

const Login = (props: Props) => {
  return (
    <section className="pb-[19.7rem] mx-auto flex justify-center mt-12">
      <Card className="px-6 max-w-xl w-full py-6">
        <CardHeader>
          <Heading1>Login</Heading1>
        </CardHeader>
        <CardBody className="flex flex-col gap-6">
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
        </CardBody>
        <CardFooter>
          <Button color="primary">Login</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Login;
