import React from 'react'
import { SignIn } from "@clerk/clerk-react";
import './signInPage.css'

function signInPage() {
  return (
    <div className='signInPage'>
        {/* copied from clerk website */}
        <SignIn path="/sign-in" signUpUrl='sign-up' forceRedirectUrl={"/dashboard"} />
    </div>
  )
}

export default signInPage