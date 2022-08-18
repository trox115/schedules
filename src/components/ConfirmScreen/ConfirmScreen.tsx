import React from 'react'

import logo from '../../logo.svg';
import './ConfirmScreen.scss';

function ConfirmScreen() {

  return (
    <div className='confirm'>
      <div className='confirm__shape'>
        <h1 className='confirm__title'>O seu pedido foi submetido com sucesso! Será contactado em breve.</h1>
      </div>
      <img src={logo} alt='af-logo' className='initial_logo' />
    </div>
  )
}

export default ConfirmScreen