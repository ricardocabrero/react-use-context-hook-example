import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import styles from '../styles/mainrouter.module.css';
import TextEntry from '../components/TextEntry';

export default function MainRouter() {
    return(
      <div className={styles.main}>
        <Router>
        <Navbar/>
            <TextEntry/>
            <Switch>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Redirect to='/home'/>
            </Switch>
        </Router>
      </div>
    )
}