import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'

export default function Schedules() { 
    const { setTime, setCurrentStep, time} = useContext(AppContext)
    const buttons = [{label: "20:00", value: 20},
                    {label: "21:00", value: 21},
                    {label: "19:00", value: 19}, 
                    {label: "18:00", value: 18}, 
                    {label: "17:00", value: 17},]

    const onClick = (e:Event) => {
        e.preventDefault();
        const value = (e.target as HTMLButtonElement).value;

        if(setTime && setCurrentStep){
            setTime(+value);
            setCurrentStep(3);
        }
    }

  return ( 
    <div>
        <Header/>
        <Resume/>
        <SubTitle sentence='Escolha a hora: '/>
        <div className='time_buttons'>
            {buttons.map((button, index) => {
                return(
                    <Button text={button.label} value={ button.value } selected={time === button.value } onClick={ onClick }/>
                )
            })}
        </div>
    </div>
  )
}
