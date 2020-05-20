import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import sygnet from "../../assets/img/brand/sygnet.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 150, height: 25, alt: "CoreUI Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/home/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </NavItem>
        </Nav> */}

        <Nav className="ml-auto" navbar>
          <Link to="/">
            <NavItem className="px-3">
              {/* <Button onClick={this.props.logout}>Logout</Button> */}
              <Button
                onClick={this.props.logout}
                className="float-right"
                color="secondary"
              >
                <i className="icon-logout"></i>
                &nbsp;Logout
              </Button>
            </NavItem>
          </Link>
        </Nav>
      </React.Fragment>
    );
  }
}

export default connect(null, { logout })(Header);
