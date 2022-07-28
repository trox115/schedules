import React from "react";

export interface AppContextProps {
  entered: boolean,
  setEntered: Function,
  duration: number,
  setDuration: Function
  totalSteps: number,
  currentStep: number,
  setCurrentStep: Function
}

const AppContext = React.createContext<Partial<AppContextProps>>({
  entered: false,
  setEntered: (bool: boolean) => { bool = true },
  duration: 0,
  setDuration: () => {},
  totalSteps: 4,
  currentStep: 0,
  setCurrentStep: () => {}
})

export default AppContext;