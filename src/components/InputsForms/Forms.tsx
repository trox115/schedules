import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useContextSelector } from 'use-context-selector'
import { AppContext } from '../../Context/App.context'

import "./Forms.scss"
import Button from '../Button/Button';

function Forms() {
  const date = useContextSelector(AppContext, state => state.date)
  const time = useContextSelector(AppContext, state => state.time)
  const duration = useContextSelector(AppContext, state => state.duration)
  const setCurrentStep = useContextSelector(AppContext, state => state.setCurrentStep)
  const details = useContextSelector(AppContext, state => state.details)
  const setDetails = useContextSelector(AppContext, state => state.setDetails)

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target
    if(setDetails){
      setDetails((prev:any) => {
        return { ...prev, [name]: value }
      })
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setCurrentStep && setCurrentStep(4);
    console.log(details);
    const response = await dispatch.schedules.postSchedule({ ...details, date, time, duration });
    window.location.href = response.url;
  }

  return (
    <form className='create__input' onSubmit={handleSubmit}>
      <label className='create__input__label'>Nome</label>
      <input className='create__input--text'
        type='text'
        required
        name='name'
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
      <textarea className='create__input--textarea'
        name='message'
        onChange={handleChange}
      />
     <Button text="Enviar" selected onClick={ handleSubmit } btClass='button__right create__input__send' />
    </form>
  )
}

export default Forms