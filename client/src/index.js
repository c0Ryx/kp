import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ServicesStore from './store/ServicesStore';
import AplicationStore from "./store/AplicationStore";
import LawyerStore from "./store/LawyerStore";

const root = ReactDOM.createRoot(document.getElementById('root'))
export const Context = createContext()

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    services: new ServicesStore(),
    aplication: new AplicationStore(),
    lawyer: new LawyerStore()
  }}>
     <App />,
  </Context.Provider>,
  
)
