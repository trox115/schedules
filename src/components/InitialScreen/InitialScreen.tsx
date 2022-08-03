import React, { useContext, useEffect } from 'react';

import logo from '../../logo.svg';
import './InitialScreen.scss';
import AppContext from '../../Context/App.context';
import { useDispatch } from 'react-redux';

function InitialScreen() {
  const { setPage } = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.content.getContent();
  },[])

  return (
    <div className='initial'>
      <img src={logo} alt="af-logo" className='initial__logo' />
      <div className='initial__shape' onClick={ setPage ? () => setPage(1) : () => {} }>
        <h1 className='initial__title'>Formulário de marcação de reunião</h1>
        <button className='initial__enter'>Entrar</button>
      </div>
    </div>
  )
}

export default InitialScreen
