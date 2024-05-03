import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ServicesStore from './store/ServicesStore';

const root = ReactDOM.createRoot(document.getElementById('root'))
export const Context = createContext()
console.log(process.env.REACT_APP_API_URL)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    services: new ServicesStore(),
  }}>
     <App />,
  </Context.Provider>,
  
)
