import logo from './logo.svg';
import './App.css';
import React from 'react';
import {PostsPage} from './PostsPage/PostsPage.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
        <Switch>
          <Route path="/posts">
            <PostsPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
