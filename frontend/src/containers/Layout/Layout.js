import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";

// sidebar nav config
import nav from "../../navs/manager_supervisor_nav";
import technician_nav from "../../navs/technician_nav";

// routes config
import routes from "../../routes";

const Header = React.lazy(() => import("./Header"));

class Layout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/dashboard");
  }

  render() {
    let navigation;
    if (this.props.role == "Technician") {
      navigation = technician_nav;
    } else {
      navigation = nav;
    }
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <Header onLogout={(e) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
});

export default connect(mapStateToProps, { login })(Layout);
