import './App.css';
import React from 'react';
import {PostsPage} from './PostsPage/PostsPage.js';
import {UserPage} from './UserPage/UserPage.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { promiseImpl } from 'ejs';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/posts">
            <PostsPage/>
          </Route>
          
          <Route path="/users/:userId">
            <UserPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
