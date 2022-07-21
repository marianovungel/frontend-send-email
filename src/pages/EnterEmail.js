import upload from '../upload'
import React from 'react'
import { Link } from 'react-router-dom'

export default function enterEmail() {

  const send = ()=>{
    upload.post("/send_email", {
      to: "vungem88@gmail.com",
      from:"vungemariano@gmail.com",
      subject: "reset password",
      message: "Renovação da palavra passe"
    })
  }
  return (
    <div className="App">
      <div className="confirm">
        <i>Digite o seu Email</i>
        <input className='input' type="email" placeholder='@gmail.com' />
        
          <button className='button' onClick={send}><Link to="/conf">Receber código...</Link></button>
        
      </div>
    </div>
  )
}
