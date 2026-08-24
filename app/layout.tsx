import type { Metadata } from "next";
import { Big_Shoulders_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-shoulders",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MX Sushi Bar — Parkdale Mall, Beaumont TX",
  description:
    "Fresh rolls, hand-pressed nigiri, and sashimi in the Parkdale Mall food court. Order delivery or call ahead for pickup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${shoulders.variable} ${inter.variable} font-body bg-paper text-ink antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
