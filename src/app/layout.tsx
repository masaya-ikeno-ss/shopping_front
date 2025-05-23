import { Metadata } from "next";
import "./globals.css"
import React from "react";
import Header from "@/_components/header/Header";
import Footer from "@/_components/footer/Footer";

export const metadata: Metadata = {
  title: "Shopping App",
  description: "Shopping App Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
