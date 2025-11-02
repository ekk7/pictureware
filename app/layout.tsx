import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { client } from '@/sanity.client'
import { footerQuery } from '@/sanity.queries'
import Footer from './components/Footer';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = await client.fetch(footerQuery)

  return (
    <html lang="en">
      <body
        className={`${kantumruyPro.variable} ${mynerve.variable} antialiased`}
      >
        <header className="header">
          <h1>PICTUREWARE</h1>
        </header>
        {children}
        {/* Corner decorations */}
        <img src="/corner-top-left.png" alt="" className="corner-decoration corner-top-left" />
        <img src="/corner-top-right.png" alt="" className="corner-decoration corner-top-right" />
        <img src="/corner-bottom-left.png" alt="" className="corner-decoration corner-bottom-left" />
        <img src="/corner-bottom-right.png" alt="" className="corner-decoration corner-bottom-right" />
        <Footer footer={footer} />
      </body>
    </html>
  );
}
