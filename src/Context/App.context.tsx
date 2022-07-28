import React from "react";

export interface AppContextProps {
  entered: boolean,
  setEntered: Function,
  duration: number,
  setDuration: Function
}

const AppContext = React.createContext<Partial<AppContextProps>>({
  entered: false,
  setEntered: (bool: boolean) => { bool = true },
  duration: 0,
  setDuration: () => {}
})

export default AppContext;