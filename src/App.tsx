import React, { useState } from 'react';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Date from './pages/Date/Date';
import Duration from './pages/Duration/Duration';
import Inputs from './pages/Inputs/Inputs';
import Schedules from './pages/Schedules/Schedules';

function App() {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    setTime,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage
  }

  return (
    <div className="App">
      <AppContext.Provider value={ context }>
      { page === 0 && <InitialScreen /> }
      { page === 1 && <Duration /> }
      { page === 2 && <Date /> }
      { page === 3 && <Schedules /> }
      { page === 4 && <Inputs />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
