import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './config/routes';

/**
 * The traditional and actual entry point for the application.
 */
ReactDOM.render(
  routes,
  document.getElementById('root')
);
