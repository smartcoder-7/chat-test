import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

import MainChat from './pages/MainChat';
import './App.css';
import 'assets/css/fontawesome.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainChat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
