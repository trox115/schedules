import React from 'react';

import logo from '../../logo.svg';
import './InitialScreen.scss';

function InitialScreen() {

  return (
    <div className='initial'>
      <img src={logo} alt="af-logo" className='initial__logo' />
      <div className='initial__shape'>
        <h1 className='initial__title'>Formulário de marcação de reunião</h1>
        <button className='initial__enter'>Entrar</button>
      </div>
    </div>
  )
}

export default InitialScreen
