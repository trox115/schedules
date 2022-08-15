import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import AppContext from '../../Context/App.context';
import { RootState } from '../../store';

import "./Forms.scss"

interface FormsProps{
    sentence: string,
}

function Forms({sentence}: FormsProps) {
    const [details, setDetails] = useState(AppContext)
    const { date, time, duration } = useContext(AppContext);
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setDetails((prev) => {
            return{...prev, [name]: value}
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await dispatch.schedules.postSchedule({...details, date, time, duration});
        window.location.href= response.url;
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