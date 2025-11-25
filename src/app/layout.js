import { Poppins } from "next/font/google";

import "./globals.css";
import SessionProviderAuth from "@/Components/NextAuth/SessionProviderAuth";


const poppins = Poppins({
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

 <SessionProviderAuth >
     
      <body className={`${poppins.className}  `}>
        {children}
      </body>
    </SessionProviderAuth>

    </html>
  );
}
