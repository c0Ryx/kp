import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import {Context} from "./index";

const App = observer(() => {
  const {user} = useContext(Context)
  const checkAuth = async () => {
      await user.checkAuth()
  }

  useEffect(() => {
      checkAuth()
  }, [user.user.id])

console.log(user.user)
  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
