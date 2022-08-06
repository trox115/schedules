import React, { useContext } from 'react'
import AppContext from '../../Context/App.context'

import "./Forms.scss"

interface FormsProps{
    sentence: string,
}

function Forms({sentence}: FormsProps) {


  return (
    <form className='create__input'>
        <label className='create__input__label'>Nome</label>
        <input className='create__input--text'
            type='text'
            required
        />
        <label className='create__input__label'>Email</label>
        <input className='create__input--text'
            type='text'
            required
        />
        <label className='create__input__label'>Mensagem</label>
        <input className='create__input--textarea'
            type='text'
            required
        />
    </form>
  )
}

export default Forms