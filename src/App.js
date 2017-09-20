import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='path' component={component} />
            <Route path='path' component={component} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
