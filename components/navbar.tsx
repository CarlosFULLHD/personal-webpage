import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import customLogo from "@/public/logocarlitosnina.png";
export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-custom-background"
      maxWidth="xl"
      shouldHideOnScroll
    >
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start gap-1" href="/">
            <img src={customLogo.src} alt="Logo" width="350" height="50" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full "
        justify="end"
      >
        <ul className="hidden md:flex gap-14 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                isExternal
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-custom-background">
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                isExternal
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
