import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import moment from "moment";
import SupervisorReports from "./SupervisorReports";
import ManagerButtons from "./ManagerButtons";

class DepartmentReports extends Component {
  state = {};

  render() {
    const isManager = this.props.role === "Manager";
    const isSupervisor = this.props.role === "Supervisor";
    return (
      <div>
        {isManager ? (
          <ManagerButtons />
        ) : isSupervisor ? (
          <SupervisorReports />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
  _id: state.auth.user._id,
});

export default connect(mapStateToProps, { login })(DepartmentReports);
