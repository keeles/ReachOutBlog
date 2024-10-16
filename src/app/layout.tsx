import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Reach Out Blog",
  description: "Blog for information on the Reach Out App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow p-5 max-w-3xl mx-auto bg-white shadow-md rounded-lg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
