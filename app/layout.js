import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Website",
  description: "Event Webpage (school project)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container my-10">
          {children}
        </main>
      </body>
    </html>
  );
}
