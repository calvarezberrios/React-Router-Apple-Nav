import React from 'react';
import NavWrapper from "./components/NavWrapper";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  

  return (
    <div className="App">

      <NavWrapper />
      
      <Route exact path = "/" component = {Home} />
      <Route path = "/linkone" >
        <div>
          <h2>Link One Page</h2>
        </div>
      </Route>
      <Route path = "/linktwo" >
        <div>
          <h2>Link Two Page</h2>
        </div>
      </Route>

    </div>
  );
}

export default App;
