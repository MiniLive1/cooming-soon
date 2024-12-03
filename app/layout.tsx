import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:
    "Live Cricket Score, IPL Schedule, Latest News, Upcoming Matches, ICC ranking and more | CricDash.com",
  description:
    "upcoming matches, commentary and match statistics.Stay updated on the latest action in the world of cricket.",
  keywords:
    "Cricket Live Score | IPL Live Score | Live Cricket Match Today | IPL Point Table | IPL 2024",
  icons: "/fav-ico.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
