// import { Geist, Geist_Mono } from "next/font/google";
import {Roboto} from "next/font/google"

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});



export const metadata = {
  title: "E-Labour",
  description: "Explore your experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
