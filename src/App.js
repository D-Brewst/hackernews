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
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/hackernews/">
          <Redirect to="/hackernews/search" />
        </Route>
        <Route exact path="/hackernews/search">
          <Search
            results={results}
            setResults={setResults}
            history={history}
            setHistory={setHistory}
          />
        </Route>
        <Route exact path="/hackernews/history">
          <History history={history}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
