"use client";

import {
  BarChart,
  Compass,
  Layout,
  List,
  Mail,
  Heart,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

export const routes = [
  {
    icon: Heart,
    label: "Donar",
    href: "https://www.buymeacoffee.com/carlosnina3",
  },
  {
    icon: Mail,
    label: "Newsletter",
    href: "/newsletter",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
