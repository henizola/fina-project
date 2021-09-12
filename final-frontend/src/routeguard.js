import {
  Route,
  Redirect,
} from 'react-router-dom';
import { useHistory } from 'react-router';

const GuardedRoute = ({ children, ...props }) => {
  const history = useHistory();
  console.log(history.location.pathname);

  if (
    window.localStorage.getItem('token') ===
      null &&
    history.location.pathname !== '/staff'
  ) {
    return <Redirect to="/" />;
  }

  return <Route {...props}>{children}</Route>;
};

export default GuardedRoute;
