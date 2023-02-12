import React from "react";
import { Switch ,Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home';
import About from "./pages/about/About";


function App() {
  return (
    <BrowserRouter>
     <Switch>
        <Route exact path={"/"} component = { Home }/>
        <Route exact path={"/sobre"} component = { About }/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;