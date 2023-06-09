import React from 'react'
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../../Context/App.context';

import './StepBar.scss';

function StepBar() {
  const totalSteps = useContextSelector(AppContext, state => state.totalSteps);
  const currentStep = useContextSelector(AppContext, state => state.currentStep)

  return (
        <div className='step-bar'>
          <div className='step-bar__done' style={{ width: currentStep && totalSteps ? `${(currentStep / totalSteps ) * 100}%` : '0'}}/>
        </div>
    )
}

export default StepBar
