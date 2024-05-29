import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Website",
  description: "Event Webpage (school project)",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="container py-10 bg-white px-5">


            <SignedIn>
              
              {children}
            </SignedIn>
            
            <SignedOut>
              <SignInButton />
            </SignedOut>



          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
