import React from 'react';
import './App.css';
import Login from './components/login'
import register  from './components/register';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/register/" component={register} />
      </div>
    </Router>
  );
}

export default AppRouter;











/*
function App() {
  return (

  );
}

export default App;
*/