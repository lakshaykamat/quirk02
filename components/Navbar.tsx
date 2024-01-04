"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import ThemeToogle from "@/components/ThemeToogle";
import { menuItems, navLink } from "@/public/assets/data";

export default function NavBar() {
  const pathname = usePathname();
  const isAuthenticated = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allLinks = navLink.map((item) => {
    return (
      <NavbarItem
        key={item.id}
        isActive={pathname === item.path ? true : false}
      >
        <Link href={item.path}>{item.label}</Link>
      </NavbarItem>
    );
  });
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-3">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">QUIRK02</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {allLinks}
      </NavbarContent>
      <NavbarContent className="gap-6" justify="end">
        <NavbarItem>
          <ThemeToogle />
        </NavbarItem>
        {isAuthenticated ? (
          <NavbarItem>
            <Avatar
              showFallback
              name="Lakshay Kamat"
              isBordered
              src="https://github.com/lakshaykamat.png"
            />
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

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
