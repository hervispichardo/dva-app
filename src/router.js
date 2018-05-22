import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Team from './routes/Team';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/team/:id"  component={Team} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
