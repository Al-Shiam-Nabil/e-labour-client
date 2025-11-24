import { Roboto } from "next/font/google";

import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Labour",
  description: "Explore your experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navbar></Navbar>
        </header>

        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
