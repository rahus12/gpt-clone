import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './RootLayout.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
// clerk authentication
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function RootLayout() {
  return (
    // clerk authentication copied from clerk website
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="rootLayout">
            <header>
                <Link to = '/' className='logo'>
                    {/* <img src="/logo.png" alt="" /> */}
                    <span>Lama AI</span>
                </Link>
                <div className="user">
                <header>
                    {/* clerk authentication copied from clerk website */}
                    {/* we dont need this as its done in a different way in homepage */}
                    {/* <SignedOut>
                        <SignInButton />
                    </SignedOut> */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </header>
                </div>
            </header>
            <main>
                <Outlet/>
                {/* this is where the children come */}
            </main> 
        </div>
   </ClerkProvider>
  )
}

export default RootLayout