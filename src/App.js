import React from "react";
import { Switch ,Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home';
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contactos from "./pages/contactos/Contactos";

function App() {
  return (
    <BrowserRouter>
     <Switch>
        <Route exact path={"/"} component = { Home }/>
        <Route exact path={"/sobre"} component = { About }/>
        <Route exact path={"/servicos"} component = { Services }/>
        <Route exact path={"/servicos/:id"} component = { Services }/>
        <Route exact path={"/contactos"} component = { Contactos }/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;