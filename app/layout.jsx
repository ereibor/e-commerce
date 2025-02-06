import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Ecommerce Application",
  description: "This is an ecommerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
