import React from 'react'
import { SignUp } from "@clerk/clerk-react";
import  './signUpPage.css'

function signUpPage() {
  return (
    <div className='signUpPage'>
        {/* copied from clerk website */}
        <SignUp path="/sign-up" signInUrl= "/sign-in" />
    </div>
  )
}

export default signUpPage