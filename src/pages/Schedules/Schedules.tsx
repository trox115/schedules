import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import "./Schedules.scss"
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'
import StepBar from '../../components/StepBar/StepBar'
import ArrowButton from '../../components/Button/ArrowButton'
import { RootState } from '../../store'
import { isWeekend, parse } from 'date-fns'

export default function Schedules() {
  const { setTime, setCurrentStep, time, setPage, date, duration } = useContext(AppContext)
  const [buttons, setButtons] = useState([{ label: '20', value: '0' }]);
  const { availableTimes } = useSelector((state: RootState) => state.content);

  const generateArrayOfTime = (from:string, to:string ) => {
    const start = parse(from, 'HH:mm', date || new Date());
    const end =  parse(to, 'HH:mm', date || new Date());

    const multiplier = duration || 15;
    const aux = []
    for(let i = start; i <= end; i = new Date(i.getTime() + multiplier * 60000)){
      aux.push({label:`${ i.getHours() }:${ i.getMinutes() === 0 ? '00' : i.getMinutes()}`,
       value:`${ i.getHours() }:${ i.getMinutes() === 0 ? '00' : i.getMinutes()}`});
    }
    setButtons(aux);
  }
  
  useEffect(() => {
    if(date){
      const usableId = isWeekend(date) ? 2 : 1;
      const availability = availableTimes.find( (time) => time.id === usableId)

      if(availability){
        generateArrayOfTime(availability.from, availability.to);
      }

    }
  },[date])
  
  const onClick = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if (setTime && setCurrentStep) {
      setTime(value.toString());
      setCurrentStep(3);
    }
  }

  return (
    <div className='schedules'>
      <Header />
      <Resume />
      <SubTitle sentence='Escolha a hora: ' align='left'/>
      <div className='schedules__buttons'>
        {buttons.map((button, index) => {
          return (
            <Button key={ index } text={button.label} value={button.value} selected={time === button.value} onClick={onClick} size={'small'} />
          )
        })}
      </div>
      <StepBar />
      <ArrowButton isNext={false} onClick={setPage ? () => setPage(2) : () => { }} />
      <ArrowButton isNext onClick={setPage ? () => setPage(4) : () => { }} />
    </div>
  )
}