import React, { memo } from 'react'

import Duration from '../../pages/Duration/Duration';
import Date from '../../pages/Date/Date';
import Inputs from '../../pages/Inputs/Inputs';
import Schedules from '../../pages/Schedules/Schedules';
import StepBar from '../StepBar/StepBar';
import ArrowButton from '../Button/ArrowButton';
import InitialScreen from '../InitialScreen/InitialScreen';
import UsePageStep from '../../hooks/usePageStep';



function RoutePage() {
  const { page, handlePageChange } = UsePageStep();  

  return (
      <>
        <div className='App__pages'>
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
      </div>
    </>

  )
}

export default memo(RoutePage)
