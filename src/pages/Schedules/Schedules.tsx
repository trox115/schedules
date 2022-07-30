import React from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'

export default function Schedules() { 
    const buttons = [{label: "20:00"},
                    {label: "21:00"},
                    {label: "19:00"}, 
                    {label: "18:00"}, 
                    {label: "17:00"},]

  return (
    <div>
        <Header/>
        <Resume/>
        <SubTitle sentence='Escolha a hora: '/>
        {buttons.map((button, index) => {
            return(
                <Button text={button.label} value={ 1 } selected={false} onClick={ () =>{} }/>
            )
        })}
    </div>
  )
}
