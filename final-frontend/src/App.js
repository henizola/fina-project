import "./App.css";
import { GlobalStyles, Container } from "./global.styles";
import routes from "./routes";
import { Route } from "react-router-dom";
import { IconContext } from "react-icons";
import Roles from "./pages/roles/roles.component";
import GuardedRoute from "./routeguard";
import SignIn from "./pages/sign-in/sign-in.component";
import { UserProvider } from "./context/user.context";
import Stuff from "./pages/stuff/stuffs.component";
import ChangePassword from "./pages/change-password/change-password.page";

function App() {
  return (
    <Container>
      <UserProvider>
        <GlobalStyles />

        <Route exact path="/" component={Roles} />

        <IconContext.Provider
          value={{
            color: "#F79E01",
            className: "global-class-name",
          }}
        >
          <Route path="/sign-in/:role" component={SignIn} />
          <Route path="/change-password/:role" component={ChangePassword} />
          <Route exact path="/staff" component={Stuff} />
          {routes.map((route, index) => {
            return (
              <GuardedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </IconContext.Provider>
      </UserProvider>
    </Container>
  );
}

export default App;
