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
import ModalComponentContanctame from "./ModalComponentContanctame";

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
            <Image
              src="logocarlitosnina.webp" // Use your Cloudflare URL pointing, FALLBACK
              alt="Logo de Carlitos Nina Marca Personal"
              width={350}
              height={50}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </NextLink>
        </NavbarBrand>
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

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-custom-background">
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2 ">
          <ModalComponentContanctame />

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
