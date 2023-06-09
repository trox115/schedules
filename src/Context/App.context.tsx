import React, { ReactNode, useState } from "react";
import { createContext } from 'use-context-selector';

type AppContextProps = {
  page?: number,
  setPage?: Function,
  duration?: number,
  setDuration?: Function
  totalSteps?: number,
  currentStep?: number,
  setCurrentStep?: Function,
  date?: Date | null,
  setDate?: Function,
  time?: string,
  setTime?: Function
  details?: {},
  setDetails?: Function
}

export const AppContext = createContext({} as AppContextProps);

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }:AppProviderProps) => {
  const [page, setPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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
    details,
    setDetails
  }

  return(
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )

} ;