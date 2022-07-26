import React from "react";

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

const AppContext = React.createContext<Partial<AppContextProps>>({
  page: 0,
  setPage: (bool: boolean) => { bool = true },
  duration: 0,
  setDuration: () => {},
  totalSteps: 4,
  currentStep: 0,
  setCurrentStep: () => {},
  date: new Date(),
  setDate: () => {},
  time: '',
  setTime: () => {},
  details: {},
  setDetails: () => {}
})

export default AppContext;