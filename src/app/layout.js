"use client";
import Nav from "./nav/index"
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
