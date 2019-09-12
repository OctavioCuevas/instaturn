import React from 'react';
import './App.css';
import Login from './components/login'
import Test  from './components/test';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Test/" component={Test} />
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