// "use client";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import ScrollUpBtn from '@/components/ScrollUpBtn';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/urlicon.webp" type="image/webp" sizes="any" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
        <ScrollUpBtn />
      </body>
    </html>
  );
}
