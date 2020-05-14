import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const Layout = React.lazy(() => import("./containers/Layout"));
const Login = React.lazy(() => import("./views/Auth/Login"));

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/dashboard"
                name="Home"
                render={(props) => <Layout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
