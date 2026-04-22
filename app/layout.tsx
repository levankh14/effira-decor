import type { Metadata, Viewport } from "next";
import { Cormorant, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";

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
    "Effira Decor — a candlelit celebration of Kutaisi City Day from a Georgian atelier.",
  openGraph: {
    title: "Effira Decor — გილოცავთ ქუთაისქალაქობას!",
    description:
      "Effira Decor — a candlelit celebration of Kutaisi City Day from a Georgian atelier.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ka"
      className={`${cormorantDisplay.variable} ${notoGeorgian.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
