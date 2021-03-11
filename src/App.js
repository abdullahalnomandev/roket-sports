import React from 'react';
import Team from './Component/Team/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamsDetails from './Component/TeamsDetails/TeamsDetails';
import NotFound from './Component/NotFound/NotFound';


const App = () => {
  return (
    <div>

      <Router>
        <Switch>

          <Route path="/team/:teamDetailsId">
            <TeamsDetails />
          </Route>

          <Route exact path="/">
            <Team />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>

    </div>
  );
};

export default App;