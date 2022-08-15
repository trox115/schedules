import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import AppContext from '../../Context/App.context';

import "./Forms.scss"

function Forms() {
  const [details, setDetails] = useState(AppContext)
  const { date, time, duration, setCurrentStep } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setDetails((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setCurrentStep && setCurrentStep(4)
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
    </form>
  )
}

export default Forms