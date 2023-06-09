import React, { memo } from 'react'

import Calendar from '../../components/Calendar/Calendar'
import Header from '../../components/Header/Header'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import './Date.scss'

function Date() {
  
  return (
    <div className="date">
      <Header />
      <Resume />
      <SubTitle sentence='Escolha o dia para a reunião:' bold='dia' align='left' />
      <Calendar />
    </div>
  )
}

export default memo(Date)
