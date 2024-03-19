import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col font-circular ">
            <Navbar />
            <main className="bg-custom-background">{children}</main>
            <Analytics />
            <footer className="w-full flex items-center justify-center py-3"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
