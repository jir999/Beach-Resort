import React from 'react';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import './App.css';

import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/single-room" component={SingleRoom} />
          <Route component={Error} />
        </Switch>                    { /* arajin handipac@ Route-a anum u verjacnum  */}
    </div>
  );
}

export default App;
