import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Date from './pages/Date/Date';
import Duration from './pages/Duration/Duration';
import { store } from './store';
import Schedules from './pages/Schedules/Schedules';
import Inputs from './pages/Inputs/Inputs';

function App() {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const totalSteps = 4;

  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  })

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
    setTime,
    details,
    setDetails
  }

  return (
    <Provider store={store}>
      <div className="App">
        <AppContext.Provider value={context}>
          {page === 0 && <InitialScreen />}
          {page === 1 && <Duration />}
          {page === 2 && <Date />}
          {page === 3 && <Schedules />}
          {page === 4 && <Inputs />}
        </AppContext.Provider>
      </div>
    </Provider>
  );
}

export default App;
