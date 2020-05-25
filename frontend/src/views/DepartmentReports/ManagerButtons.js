import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
  Col,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class ManagerButtons extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardHeader>
          {" "}
          <strong>Choose department</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Link
                to={{
                  // pathname: `/home/DepartmentReports/${pm._id}`,
                  pathname: "/home/DepartmentReports/Department",
                  department: "cardiology",
                }}
              >
                <Button block color="primary" className="btn-pill" size="lg">
                  Cardiology
                </Button>
              </Link>
            </Col>

            <Col>
              <Link
                to={{
                  // pathname: `/home/DepartmentReports/${pm._id}`,
                  pathname: "/home/DepartmentReports/Department",
                  department: "surgery",
                }}
              >
                <Button block color="success" className="btn-pill" size="lg">
                  Surgery
                </Button>
              </Link>
            </Col>

            <Col>
              <Link
                to={{
                  // pathname: `/home/DepartmentReports/${pm._id}`,
                  pathname: "/home/DepartmentReports/Department",
                  department: "reception",
                }}
              >
                <Button block color="warning" className="btn-pill" size="lg">
                  Reception
                </Button>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
  _id: state.auth.user._id,
});

export default connect(mapStateToProps, { login })(ManagerButtons);
