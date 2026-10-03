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
  title: "Star Wars Archive",
  description: "Фільми, планети та персонажі з SWAPI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-space bg-[radial-gradient(circle_at_50%_-15%,rgba(55,89,157,0.34),transparent_34rem),radial-gradient(circle_at_12%_16%,rgba(255,232,31,0.12),transparent_16rem)] font-sans text-sw-text">
        {children}
      </body>
    </html>
  );
}
