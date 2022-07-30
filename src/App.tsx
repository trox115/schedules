import React, { useState } from 'react';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Date from './pages/Date/Date';
import Duration from './pages/Duration/Duration';

function App() {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const context = {
    page,
    setPage,
    duration,
    setDuration,
    totalSteps,
    currentStep,
    setCurrentStep
  }

  return (
    <div className="App">
      <AppContext.Provider value={ context }>
      { page === 0 && <InitialScreen /> }
      { page === 1 && <Duration /> }
      { page === 2 && <Date /> }
      </AppContext.Provider>
    </div>
  );
}

export default App;
