import React, { useContext } from 'react';

import logo from '../../logo.svg';
import './InitialScreen.scss';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import UsePageStep from '../../hooks/usePageStep';


function InitialScreen() {
  const { handlePageChange } = UsePageStep();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.content)

  const loadContent = async () => {
    await dispatch.content.getContent();

    await dispatch.schedules.getSchedules();

    if (!loading) {
      handlePageChange(1);
    }
  }

  return (
    <div className='initial'>
      <img src={logo} alt="af-logo" className='initial__logo' />
      <div className={classNames({
        'initial__shape': true,
        'initial__shape--all-screen': loading
      })} onClick={loadContent}>
        {!loading && (
          <>
            <h1 className='initial__title'>Formulário de marcação de reunião</h1>
            <button className='initial__enter'>Entrar</button>
          </>
        )
        }
        {
          loading && <h1 className='initial__title initial__title--centered'>Aguarde por favor</h1>
        }
      </div>
    </div>
  )
}

export default InitialScreen
