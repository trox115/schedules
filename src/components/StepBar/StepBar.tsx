import React, { useContext } from 'react'
import AppContext from '../../Context/App.context';

import './StepBar.scss';

function StepBar() {
  const { currentStep, totalSteps } = useContext(AppContext);

  return (
        <div className='step-bar'>
          <div className='step-bar__done' style={{ width: currentStep && totalSteps ? `${(currentStep / totalSteps ) * 100}%` : '0'}}/>
        </div>
    )
}

export default StepBar
