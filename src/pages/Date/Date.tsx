import React, { useContext, useEffect } from 'react'
import ArrowButton from '../../components/Button/ArrowButton'
import Calendar from '../../components/Calendar/Calendar'
import Header from '../../components/Header/Header'
import Resume from '../../components/Resume/Resume'
import StepBar from '../../components/StepBar/StepBar'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'


function Date() {
  const { setCurrentStep, setPage } = useContext(AppContext);

useEffect(() => {
  if(setCurrentStep){
    setCurrentStep(2)
  }
}, [])
  
  return (
        <div className="date">
          <Header />
          <Resume />
          <SubTitle sentence='Escolha o dia para a reunião:' bold='dia' align='left'/>
          <Calendar />
          <StepBar />
          <ArrowButton isNext={ false } onClick={ setPage ? () => setPage(1) : () => {} } />
          <ArrowButton isNext onClick={ setPage ? () => setPage(3) : () => {} } />
        </div>
    )
}

export default Date
