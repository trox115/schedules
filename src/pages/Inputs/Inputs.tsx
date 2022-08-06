import React, { useContext } from 'react'

import ArrowButton from '../../components/Button/ArrowButton'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Forms from '../../components/InputsForms/Forms'
import Resume from '../../components/Resume/Resume'
import StepBar from '../../components/StepBar/StepBar'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'

import './Inputs.scss'

function Inputs() {
  const { setCurrentStep, setPage, name, setName, message, setMessage, email, setEmail} = useContext(AppContext)

  const onClick = (e:Event) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if(setName && setCurrentStep){
      setName(+value);
      setCurrentStep(4);
    }
    if(setMessage && setCurrentStep){
      setMessage(+value);
      setCurrentStep(4);
    }
    if(setEmail && setCurrentStep){
      setEmail(+value);
      setCurrentStep(4);
    }
  }
  return (
    <div className='inputs'>
      <Header/>
      <Resume />
      <SubTitle sentence='Os seus dados: ' align='left'/>
      <div className='inputs--forms'>
        <Forms sentence='Nome'/>
      </div>
      <StepBar />
      <ArrowButton isNext={false} onClick={setPage ? () => setPage(3) : () => { }} />
      <Button text='Enviar' onClick={ onClick } size='large' />
      
    </div>
  )
}

export default Inputs