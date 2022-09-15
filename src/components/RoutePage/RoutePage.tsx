import React, { memo, useCallback } from 'react'

import { useDispatch } from 'react-redux';
import Duration from '../../pages/Duration/Duration';
import Date from '../../pages/Date/Date';
import Inputs from '../../pages/Inputs/Inputs';
import Schedules from '../../pages/Schedules/Schedules';
import StepBar from '../StepBar/StepBar';
import ArrowButton from '../Button/ArrowButton';
import Button from '../Button/Button';
import InitialScreen from '../InitialScreen/InitialScreen';
import { AppContext, AppProvider } from '../../Context/App.context';
import { useContextSelector } from 'use-context-selector';
import UsePageStep from '../../hooks/usePageStep';



function RoutePage() {
  const { page, handlePageChange } = UsePageStep();  
  const submitForm = async () => {
    // const response = await dispatch.schedules.postSchedule({ ...details, date, time, duration });
    // window.location.href = response.url;
  }

  return (
      <><div className='App__pages'>
      {page === 0 && <InitialScreen />}
      {page === 1 && <Duration />}
      {page === 2 && <Date />}
      {page === 3 && <Schedules />}
      {page === 4 && <Inputs />}
    </div>
    <div className='App__bottom-container'>
        {page !== 0 && <StepBar />}
        {page > 1 && <ArrowButton isNext={false} onClick={() => handlePageChange(page - 1)} />}
        <ArrowButton isNext onClick={() => handlePageChange(page + 1)} />
        {page === 4 && <Button text="Enviar" selected onClick={submitForm} btClass='button__right' />}
      </div>
    </>

  )
}

export default memo(RoutePage)
