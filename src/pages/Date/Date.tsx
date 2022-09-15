import React, { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'

import Calendar from '../../components/Calendar/Calendar'
import Header from '../../components/Header/Header'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import { AppContext } from '../../Context/App.context'
import './Date.scss'

function Date() {
  const currentStep = useContextSelector(AppContext, state => state.currentStep)
  const setCurrentStep = useContextSelector(AppContext, state => state.setCurrentStep)
  const page = useContextSelector(AppContext, state => state.page)

  useEffect(() => {
    if ( page !== 1 && currentStep !== 2) {
      setCurrentStep(2)
    }
  })

  return (
    <div className="date">
      <Header />
      <Resume />
      <SubTitle sentence='Escolha o dia para a reunião:' bold='dia' align='left' />
      <Calendar />
    </div>
  )
}

export default Date
