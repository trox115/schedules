import React, { useContext } from 'react'

import ArrowButton from '../../components/Button/ArrowButton'
import Header from '../../components/Header/Header'
import Forms from '../../components/InputsForms/Forms'
import Resume from '../../components/Resume/Resume'
import StepBar from '../../components/StepBar/StepBar'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context'

import './Inputs.scss'

function Inputs() {
  const { setPage } = useContext(AppContext)

  return (
    <div className='inputs'>
      <Header/>
      <Resume />
      <SubTitle sentence='Os seus dados: ' align='left'/>
      <div className='inputs--forms'>
        <Forms sentence='Nome'/>
      </div>
      <ArrowButton isNext={false} onClick={ setPage ? () => setPage(3) : () => { } } />      
    </div>
  )
}

export default Inputs