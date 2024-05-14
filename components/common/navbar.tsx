"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import ModalComponentContanctame from "../sections/phoneAdiction/components/ModalComponentContanctame";
import { Logo } from "../icons";
import { routes } from "./SidebarRoutes";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-custom-background h-12 md:h-10 lg:h-12 xl:h-14 sticky"
      maxWidth="full"
      shouldHideOnScroll
    >
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <Link className="flex justify-start gap-1" href="/">
          <Logo className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className=" hidden md:flex gap-14 text-white">
          {routes.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className="text-white text-xs lg:text-lg flex items-center gap-2"
                href={item.href}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
        <div className="md:flex hidden">
          <ModalComponentContanctame />
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};
