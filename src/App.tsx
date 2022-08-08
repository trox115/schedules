import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Date from './pages/Date/Date';
import Duration from './pages/Duration/Duration';
import { store } from './store';
import Schedules from './pages/Schedules/Schedules';

function App() {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(0);
  const totalSteps = 4;

  const context = {
    page,
    setPage,
    duration,
    setDuration,
    totalSteps,
    currentStep,
    setCurrentStep,
    date,
    setDate,
    time,
    setTime
  }

  return (
    <Provider store={store}>
      <div className="App">
        <AppContext.Provider value={context}>
          {page === 0 && <InitialScreen />}
          {page === 1 && <Duration />}
          {page === 2 && <Date />}
          {page === 3 && <Schedules />}
        </AppContext.Provider>
      </div>
    </Provider>
  );
}

export default App;
