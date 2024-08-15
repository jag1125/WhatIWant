import { Inter } from "next/font/google";
import Side from './Components/Side';
import './home.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatIWant Gift Giving Application",
  description: "Making gifting easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <p className="square"/>
      <Side/>
      {children}
      </body>
    </html>
  );
}
