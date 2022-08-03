import React, { useContext } from 'react'

import "./Schedules.scss"
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'
import StepBar from '../../components/StepBar/StepBar'
import ArrowButton from '../../components/Button/ArrowButton'

export default function Schedules() {
  const { setTime, setCurrentStep, time, setPage } = useContext(AppContext)
  const buttons = [{ label: "20:00", value: 20 },
  { label: "21:00", value: 21 },
  { label: "19:00", value: 19 },
  { label: "18:00", value: 18 },
  { label: "17:00", value: 17 },
  { label: "16:00", value: 16 }]

  const onClick = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if (setTime && setCurrentStep) {
      setTime(+value);
      setCurrentStep(3);
    }
  }

  return (
    <div className='schedules'>
      <Header />
      <Resume />
      <SubTitle sentence='Escolha a hora: ' />
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