import React from 'react'
import Header from '../../components/Header/Header'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'


function Date() {

  return (
        <div className="date">
          <Header />
          <Resume />
          <SubTitle sentence='Escolha o dia para a reunião' bold='dia' />
        </div>
    )
}

export default Date
