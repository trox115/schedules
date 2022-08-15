import { useSelect } from '@mui/base';
import React, { useContext } from 'react'
import logo from '../../logo.svg';
import AppContext from '../../Context/App.context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import classNames from 'classnames';

import './ConfirmScreen.scss';

function ConfirmScreen() {
    const { setPage } = useContext(AppContext);
    const dispatch = useDispatch();
    const { loading } = useSelector((state: RootState) => state.content)

    const loadContent = async () => {
        await dispatch.content.getContent();

        dispatch.schedules.getSchedules();

        if (setPage && !loading) {
          setPage(5);
        }
    }

  return (
    <div className='confirm'>
        <div className={classNames({
            'initial__shape': true,
            'initial__shape--all-screen': loading
        })} onClick={loadContent}>
            {!loading && (
                <>
                    <h1 className='initial__title'>O seu pedido foi submetido com sucesso! Será contactado em breve.</h1>
                </>
            )}
        </div>
        <img src={logo} alt='af-logo' className='initial_logo' />        
    </div>
  )
}

export default ConfirmScreen