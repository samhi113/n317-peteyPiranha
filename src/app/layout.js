import Nav from "./nav/index"
import Link from "next/link";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav/>
        {children}
        </body>
    </html>
  );
}
