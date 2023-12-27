import { Avatar, Button, NavbarItem } from "@nextui-org/react";
import ThemeToogle from "./ThemeToogle";
import Link from "next/link";

export const UserAvatar = () => {
    return (
      <>
        <NavbarItem>
          <ThemeToogle />
        </NavbarItem>
        <NavbarItem>
          <Avatar
            showFallback
            isBordered
            color="primary"
            name="Lakshay"
            src="https://i.pinimg.com/564x/5b/fa/d8/5bfad892faf0b002a9cc9cf8ab9e98a3.jpg"
          />
        </NavbarItem>
      </>
    );
  };

export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );

export const LoginButtons = () => {
    return (
      <>
        <NavbarItem>
          <ThemeToogle />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  };