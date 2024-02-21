import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TradePage from './pages/TradePage';
import AccountPage from './pages/AccountPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/trade" component={TradePage} />
        <Route path="/account" component={AccountPage} />
      </Switch>
    </Router>
  );
}

export default App;