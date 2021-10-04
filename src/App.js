import React, {useState} from 'react';
import Search from './components/Search';
import History from './components/History';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './styles.css';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/search">
          <Search
            history={history}
            setHistory={setHistory}
          />
        </Route>
        <Route exact path="/history">
          <History history={history}/>
        </Route>
        <Route exact path="*">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
