import React, { useState } from 'react'

export const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) =>{

        e.preventDefault();

        console.log({
            name,
            password,
            email
        })
    }
  return (
    <form onSubmit={register} className='pb-2 z-30' >
        <h2>
            Please register with email and name
        </h2>
        <input className='' placeholder='Name'>
        </input>
        <input className='' placeholder='Email'>
        </input>
        <input className='' placeholder='Password' type='password'>
        </input>
       <button type='submit'>Submit</button>




    </form>
  )
}
