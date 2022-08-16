import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import './App.scss';
import InitialScreen from './components/InitialScreen/InitialScreen';
import AppContext from './Context/App.context';
import Date from './pages/Date/Date';
import Duration from './pages/Duration/Duration';
import { store } from './store';
import Schedules from './pages/Schedules/Schedules';
import Inputs from './pages/Inputs/Inputs';
import StepBar from './components/StepBar/StepBar';
import ConfirmScreen from './components/ConfirmScreen/ConfirmScreen';
import ArrowButton from './components/Button/ArrowButton';
import Button from './components/Button/Button';

function App() {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const totalSteps = 4;

  const dispatch = useDispatch();

  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  })

  const arrowNextValid = () => {
    if(page === 1){
      return duration > 0
    } else if(page === 2){
      return true
    } else if(page === 3){
      return time.length > 0;
    } 
    return false
  }

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

  const submitForm = async () => {
      setCurrentStep && setCurrentStep(4)
      const response = await dispatch.schedules.postSchedule({ ...details, date, time, duration });
      window.location.href = response.url;
  }

  return (
      <div className="App">
        <AppContext.Provider value={context}>
          <Router>
            <Route path='/'>
              {page === 0 && <InitialScreen />}
              {page === 1 && <Duration />}
              {page === 2 && <Date />}
              {page === 3 && <Schedules />}
              {page === 4 && <Inputs />}
            </Route>
            <Route path='/success'>
              <ConfirmScreen/>
            </Route>
          </Router>
          { page !== 0 && <StepBar /> }
          { page > 1 && <ArrowButton isNext={ false } onClick={ () => setPage(page-1) } /> }
          { arrowNextValid() && <ArrowButton isNext onClick={ () => setPage(page+1) } /> }
          { page === 4 && <Button text="Enviar" selected onClick={ submitForm } btClass='button__right' /> }
        </AppContext.Provider>
      </div>
  );
}

export default App;
