import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import ReactAppLanding from './components/ReactAppLanding';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/mfe1/page1">
              <h1>PAGE 1</h1>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/mfe1/page2">
              <h1>PAGE 2</h1>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/mfe1" component={ReactAppLanding} />
          </Switch>
          <Switch>
            <Route exact path="/">
              <ReactAppLanding />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
