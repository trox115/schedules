import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

import './App.scss';
import { store } from './store';
import ConfirmScreen from './components/ConfirmScreen/ConfirmScreen';
import RoutePage from './components/RoutePage/RoutePage';

function App() {

  return (
      <div className="App">
        <Provider store={store}>
          <Router>
          <Routes>
            <Route path='/' element={ <RoutePage/> } />
            <Route path='/success' element={<ConfirmScreen/>}/>           
          </Routes>
          </Router>
        </Provider>
      </div>
  );
}

export default App;
