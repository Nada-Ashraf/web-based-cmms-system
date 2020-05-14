import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import sygnet from "../../assets/img/brand/sygnet.png";

const propTypes = {
  children: PropTypes.node,
  logout: PropTypes.func.isRequired,
};

const defaultProps = {
  user: {},
};

class Header extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 150, height: 25, alt: "CoreUI Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Calendar
            </Link>
          </NavItem>
        </Nav>
        {/* <Nav className="ml-auto" navbar> */}

        <Nav className="ml-auto" navbar>
          <Link to="/login">
            <NavItem onClick={this.props.logout} className="px-3">
              Logout
            </NavItem>
          </Link>
        </Nav>
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default connect(null, { logout })(Header);
