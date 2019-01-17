  import {Route} from "react-router";
  import React from "react";
  import { Router } from 'react-router';

  import history from '../history';

  import App from '../App';
  import Home from '../containers/Home';

  /**
   * Represents the routes of the application
   Outter element has set to <App> in order to include generic UI elements such as header and footer
   --- react-router & no IndexRoute any more ---
   */
  const routes = (
      <App>
          <Router history={history}>
              <div>
                  <Route exact path="/" component={ Home }/>
              </div>
          </Router>
      </App>
  );

  export default routes;
