import { Poppins } from "next/font/google";

import "./globals.css";
import AuthProvider from "@/context/AuthProvider";


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
      <body className={`${poppins.className}  `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
