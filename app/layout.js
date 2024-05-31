import { inter } from './fonts'
import "./globals.css";
import Header from "./_components/header";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'



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
              <div className='text-center'>
                <SignInButton className="font-bold bg-blue-900 py-5 px-10 rounded-lg text-white hover:bg-blue-700" />
              </div>
            </SignedOut>



          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
