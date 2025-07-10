"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/component/SideBar";
import "@/app/styles/body.css";
import { ThemeContext, ThemeProvider } from "@/context/ThemeProvider";
import { useContext } from "react";
import { CountProvider } from "@/context/CountProvider";
import NavbarDrawer from "@/component/SideBar";
import { AuthProvider } from "@/context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Body = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <body className={theme}>{children}</body>;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <ThemeProvider>
        <Body>
          <CountProvider>
            <AuthProvider>
            <NavbarDrawer/>
            {/* <Sidebar/> */}
            <div className="app-layout">
              <main className="main-content home-body">{children}</main>
            </div>
            </AuthProvider>
          </CountProvider>
        </Body>
      </ThemeProvider>
    </html>
  );
}
