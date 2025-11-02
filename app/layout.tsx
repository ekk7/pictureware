import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const kantumruyPro = localFont({
  src: [
    {
      path: "../public/fonts/KantumruyPro-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kantumruyPro",
});


const playpen = localFont({
  src: [
    {
      path: "../public/fonts/PlaypenSansThai-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-playpen",
});

const mynerve = localFont({
  src: [
    {
      path: "../public/fonts/Mynerve-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mynerve",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pictureware",
  description: "Dizzing tableware",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kantumruyPro.variable} ${mynerve.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
