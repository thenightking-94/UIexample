import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Home from './components/Home.js';
import SideSelection from './components/SideSelection';
import mainGame from './components/mainGame';


class App extends Component {

  render() {
    return (
      <div>
        <MetaTags>
          <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,
                user-scalable=no,target-densitydpi=device-dpi"/>
        </MetaTags>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
