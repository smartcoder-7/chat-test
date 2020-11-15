import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

import { UserContextProvider } from 'context/User.context';
import MainChat from './pages/MainChat';

import 'assets/css/fontawesome.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={MainChat} />
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
