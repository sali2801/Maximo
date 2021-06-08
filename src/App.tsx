import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import AppHeader from './components/AppHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <Content id="main-content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
