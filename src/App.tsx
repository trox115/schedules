import React, { useState } from 'react';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Duration from './pages/Duration/Duration';

function App() {
  const [entered, setEntered] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const context = {
    entered,
    setEntered,
    duration,
    setDuration,
    totalSteps,
    currentStep,
    setCurrentStep
  }

  return (
    <div className="App">
      <AppContext.Provider value={ context }>
      { !entered && <InitialScreen /> }
      {
        entered && (
          <>
          <Duration />
          </>
        )
      }
      </AppContext.Provider>
    </div>
  );
}

export default App;