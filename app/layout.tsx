import type { Metadata } from "next";
import { Geist, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome",
  description: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${urbanist.variable} antialiased`}
      >
        <div className="flex flex-col min-h-[100vh]">

          <div className="w-full">
            <Navbar />
          </div>

          <div className="flex-1 mx-auto">
            {children}
          </div>
          <div className="w-full">

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
