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
} from "@nextui-org/react";
import { LoginButtons, UserAvatar } from "./NavBarComponents";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLogin = true;

  const menuItems = [
    {
      id:1,
      path:"/",
      label:"Home",
    },
    {
      id:2,
      path:"/dashboard",
      label:"Dashboard",
    },
    {
      id:3,
      path:"/habits",
      label:"Habits"
    }
  ];

  const navLink = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/dashboard",
      label: "Dashboard",
    },
    {
      id: 3,
      path: "/habits",
      label: "Haibits",
    },
  ];

  const allLinks = navLink.map((item) => {
    return (
      <NavbarItem key={item.id} isActive={pathname === item.path}>
        <Link href={item.path}>{item.label}</Link>
      </NavbarItem>
    );
  });
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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
      <NavbarContent justify="end">
      {isLogin ? <UserAvatar/> : <LoginButtons/>}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.id}-${index}`}>
            <Link
              color={`${pathname === item.path ? "primary" : "foreground"}`}
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}