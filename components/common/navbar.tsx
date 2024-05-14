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

export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-custom-background"
      maxWidth="full"
      shouldHideOnScroll
    >
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <Link className="flex justify-start gap-1" href="/">
          <Logo className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
        </Link>
      </NavbarContent>
      <p className="invisible md:visible">
        <ModalComponentContanctame />
      </p>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full "
        justify="end"
      >
        <ul className="hidden md:flex gap-14 italic text-white">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link isExternal className="text-white" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </NextUINavbar>
  );
};
