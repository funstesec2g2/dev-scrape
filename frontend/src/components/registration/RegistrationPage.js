import React from 'react'
import "./registration.css"

export const RegistrationPage = () => {
  return (
    <div className='registration-page'>


         <h1 className='registration-title'>
            Create Your Free Account Here
        </h1> 
        <div>
        <form className='registration-form'>  
            <input type='text' name="account-name" id="account-name" placeholder='Full Name'/>
            <input type="text" name="account-email" id="account-email" placeholder='Email' />
            <input type="password" name="account-password" id="account-password" placeholder='Password'/>
        </form>
        </div>
    </div>
  )
}
