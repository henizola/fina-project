import './App.css';
import {
  GlobalStyles,
  Container,
} from './global.styles';
import routes from './routes';
import { Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import Roles from './pages/roles/roles.component';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Route exact path="/" component={Roles} />
      <IconContext.Provider
        value={{
          color: '#F79E01',
          className: 'global-class-name',
        }}
      >
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </IconContext.Provider>
    </Container>
  );
}

export default App;
