import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Portfolio - Web Development & Design",
  description: "Welcome to my professional portfolio showcasing my skills in web development, design, and consulting. View my projects and get in touch for collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
