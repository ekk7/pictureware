import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { client } from '@/sanity.client'
import { footerQuery, headerQuery } from '@/sanity.queries'
import Footer from './components/Footer/Footer';
import StudioWrapper from './components/StudioWrapper' // 👈 client-side wrapper
import Header from "./components/Header/Header";

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
  manifest: "/manifest.json",
  themeColor: "#B34846", // Browser UI color (Android / Windows)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Pictureware",
    statusBarStyle: "black-translucent",
  },
  applicationName: "Pictureware",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Pictureware",
    description: "Dizzing tableware",
    url: "https://picture-ware.com",
    siteName: "Pictureware",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Pictureware Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pictureware",
    description: "Dizzing tableware",
    images: ["/apple-touch-icon.png"],
    creator: "@picture.ware",
  },
  metadataBase: new URL("https://picture-ware.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await client.fetch(headerQuery)
  const footer = await client.fetch(footerQuery)

  return (
    <html lang="en">
      <body
        className={`${kantumruyPro.variable} ${mynerve.variable} antialiased`}
      >
        <StudioWrapper >
          <Header header={headerData} />
          {/* Corner decorations */}
          <img src="/corner-top-left.png" alt="" className="corner-decoration corner-top-left" />
          <img src="/corner-top-right.png" alt="" className="corner-decoration corner-top-right" />
          <img src="/corner-bottom-left.png" alt="" className="corner-decoration corner-bottom-left" />
          <img src="/corner-bottom-right.png" alt="" className="corner-decoration corner-bottom-right" />
        </StudioWrapper>
        
        {children}
        
        <Footer footer={footer} />
      </body>
    </html>
  );
}
