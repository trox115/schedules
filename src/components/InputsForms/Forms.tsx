import React from 'react'

import "./Forms.scss"

interface FormsProps{
    sentence: string,

}


function Forms({sentence}: FormsProps) {
  return (
    <form className='create'>
        <label>Nome</label>
        <input className='create--text'
            type='text'
            required
        />
        <label>Email</label>
        <input className='create--text'
            type='text'
            required
        />
        <label>Mensagem</label>
        <textarea className='create--textarea'
            required
        />
    </form>
  )
}

export default Forms