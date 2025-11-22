import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivkant Kushwaha | Portfolio",
  description:
    "Portfolio of Shivkant Kushwaha focused on internships, placements, web apps and cloud infrastructure.",
  openGraph: {
    title: "Shivkant Kushwaha | Portfolio",
    description:
      "Portfolio of Shivkant Kushwaha – Next.js, JS, Tailwind, Cloud.",
    url: "https://shivkantkushwaha.online",
    siteName: "Shivkant Kushwaha | Portfolio",
    type: "website",
  },
  icons: {
    icon: "/shivkantpic.png",
    shortcut: "/shivkantpic.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
