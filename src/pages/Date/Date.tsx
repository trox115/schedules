import React, { memo, useEffect } from 'react'

import Calendar from '../../components/Calendar/Calendar'
import Header from '../../components/Header/Header'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import { AppContext } from '../../Context/App.context'
import './Date.scss'

function Date() {

  useEffect(() => {

  },[])
  
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
