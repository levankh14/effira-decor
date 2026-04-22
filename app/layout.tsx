import type { Metadata } from "next";
import {
  Cormorant,
  Cormorant_Garamond,
  Noto_Serif_Georgian,
} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cormorantDisplay = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-display",
  display: "swap",
});

const notoGeorgian = Noto_Serif_Georgian({
  subsets: ["georgian"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-georgian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Effira Decor — გილოცავთ ქუთაისქალაქობას!",
  description:
    "Effira Decor — elegant event styling and decor from Kutaisi, Georgia. A celebration of Kutaisi City Day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ka"
      className={`${cormorantGaramond.variable} ${cormorantDisplay.variable} ${notoGeorgian.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
