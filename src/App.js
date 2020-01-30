import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Categories } from './components/Categories';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <NavigationBar />
          <Categories />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
