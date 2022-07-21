import React from 'react'

export default function confirmEmail() {
  return (
    <div className="App">
      <div className="confirm">
        <i className='i'>Verifique o seu email. Acabamos de enviar o seu código de confirmação</i>
        <input className='input' type="number" placeholder='- - - - - -'/>
        <button className='button'>Confirmar</button>
      </div>
    </div>
  )
}
