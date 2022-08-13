import React, { useState } from 'react'
import AppContext from '../../Context/App.context'

import "./Forms.scss"

interface FormsProps{
    sentence: string,
}

function Forms({sentence}: FormsProps) {

    const [details, setDetails] = useState(AppContext)

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setDetails((prev) => {
            return{...prev, [name]: value}
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
         console.log(details)
    }
   

  return (   
    <form className='create__input' onSubmit={handleSubmit}>
        <label className='create__input__label'>Nome</label>
        <input className='create__input--text'
            type='text'
            required
            name= 'name'
            onChange={handleChange}
        />
        <label className='create__input__label'>Email</label>
        <input className='create__input--text'
            type='email'
            required
            name='email'
            onChange={handleChange}
        />
        <label className='create__input__label'>Mensagem</label>
        <input className='create__input--textarea'
            type='text'
            name='message'
            onChange={handleChange}
        />
        <button className='create__input__button' type='submit'>Enviar</button>
    </form>
  )
}

export default Forms