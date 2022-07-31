import React from "react";

export interface AppContextProps {
  page: number,
  setPage: Function,
  duration: number,
  setDuration: Function
  totalSteps: number,
  currentStep: number,
  setCurrentStep: Function,
  date: string,
  setDate: Function,
  time: number,
  setTime: Function
}

const AppContext = React.createContext<Partial<AppContextProps>>({
  page: 0,
  setPage: (bool: boolean) => { bool = true },
  duration: 0,
  setDuration: () => {},
  totalSteps: 4,
  currentStep: 0,
  setCurrentStep: () => {},
  date: '',
  setDate: () => {},
  time: 0,
  setTime: () => {}
})

export default AppContext;