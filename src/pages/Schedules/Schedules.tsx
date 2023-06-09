import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { format, isWeekend, parse, areIntervalsOverlapping } from 'date-fns';
import _ from 'lodash';

import "./Schedules.scss"
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import { AppContext } from '../../Context/App.context'
import { RootState } from '../../store'
import { useContextSelector } from 'use-context-selector';

export default function Schedules() {
  const [buttons, setButtons] = useState([{ label: '20', value: '0' }]);
  const { availableTimes } = useSelector((state: RootState) => state.content);
  const { schedules } = useSelector((state: RootState) => state.schedules);

  const duration = useContextSelector(AppContext, state => state.duration);
  const date = useContextSelector(AppContext, state => state.date)
  const time = useContextSelector(AppContext, state => state.time)
  const setTime = useContextSelector(AppContext, state => state.setTime);
  const setCurrentStep = useContextSelector(AppContext, state => state.setCurrentStep)


  const generateArrayOfTime = (from:string, to:string ) => {
    const start = parse(from, 'HH:mm', date || new Date());
    const end =  parse(to, 'HH:mm', date || new Date());

    const multiplier = duration || 15;
    const aux = [];
    let bookedDates:any = [];
    if(date){
      const formatedDate = format(date, 'dd/MM/yyyy');
    
      bookedDates = _.filter(schedules, (booked) => {
        const splitedDate = (booked.date).split('T')
        return format(new Date(splitedDate[0]), 'dd/MM/yyyy') === formatedDate;
      })
    }

    for (let i = start; i <= end; i = new Date(i.getTime() + multiplier * 60000)) {
      const shouldPushTime = _.some(bookedDates, (booked) => {
        if (date) {
          const meetingStart = new Date(date).setUTCHours(new Date(booked.start).getHours()-1, new Date(booked.start).getMinutes(), 0, 0);
          const meetingEnd = new Date(date).setUTCHours(new Date(booked.end).getHours()-1, new Date(booked.end).getMinutes(), 0, 0);
          const newstart = new Date(date).setUTCHours(i.getHours(), i.getMinutes(), 0, 0);
          const ending = new Date(i.getTime() + multiplier * 60000);
          const newEnd = new Date(date).setUTCHours(ending.getHours(), ending.getMinutes(), 0, 0);
          const overlapping = areIntervalsOverlapping({
            start: meetingStart,
            end: meetingEnd
          }, {
            start: newstart,
            end: newEnd
          })
          return !overlapping;
        }
        return true;
      })

      if (shouldPushTime || bookedDates.length === 0) {
        aux.push({
          label: `${i.getHours()}:${i.getMinutes() === 0 ? '00' : i.getMinutes()}`,
          value: `${i.getHours()}:${i.getMinutes() === 0 ? '00' : i.getMinutes()}`
        });
      }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])

  useEffect(() => {
    if (time && setCurrentStep) {
      setCurrentStep(3);
    }
  });
  
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
    </div>
  )
}