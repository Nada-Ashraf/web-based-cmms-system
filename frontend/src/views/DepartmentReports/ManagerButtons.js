import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class ManagerButtons extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link
          to={{
            // pathname: `/home/DepartmentReports/${pm._id}`,
            pathname: "/home/DepartmentReports/Department",
            department: "cardiology",
          }}
        >
          <Button>Cardiology</Button>
        </Link>
        <Link
          to={{
            // pathname: `/home/DepartmentReports/${pm._id}`,
            pathname: "/home/DepartmentReports/Department",
            department: "surgery",
          }}
        >
          <Button>Surgery</Button>
        </Link>
        <Link
          to={{
            // pathname: `/home/DepartmentReports/${pm._id}`,
            pathname: "/home/DepartmentReports/Department",
            department: "reception",
          }}
        >
          <Button>reception</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
  _id: state.auth.user._id,
});

export default connect(mapStateToProps, { login })(ManagerButtons);
