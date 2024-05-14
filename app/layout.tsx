import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/common/navbar";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { MobileSidebar } from "@/components/common/MobileSidebar";
import Sidebar from "@/components/common/Sidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Agrega aquí otros elementos del Head como estilos o favicon */}
      <Script
        strategy="lazyOnload"
        src="https://app.lemonsqueezy.com/js/lemon.js"
      />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-custom-background ",
          fontSans.variable
        )}
        style={{ zIndex: 0 }}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {/* <div className="relative flex flex-col font-circular ">
            <Navbar />  
            <main className="relative bg-custom-background">{children}</main>
            <Analytics />
            <footer className="w-full flex items-center justify-center py-3"></footer>
          </div> */}
          <div className="relative flex flex-col font-circular h-full dark:bg-black-50">
            <div className="h-12 md:h-16 lg:h-16 inset-y-0 fixed top-0 left-0 w-full z-40 bg-custom-background">
              <div className="pl-6 md:p-4 h-full flex items-center shadow-sm z-50 bg-custom-background text-white">
                <MobileSidebar />
                <Navbar />
              </div>
            </div>
            {/* <div className="hidden md:flex h-full w-64 lg:w-72 xl:w-80 flex-col fixed inset-y-0 z-40 pt-20">
              <Sidebar />
            </div> */}
            <main className="relative bg-custom-background mt-10">
              {children}
            </main>
            <Analytics />
            <footer className="w-full flex items-center justify-center py-3"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
