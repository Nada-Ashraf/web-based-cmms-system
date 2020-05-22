import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";

class AddEmployee extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: "",
    department: "",
    errMsg: null,
    successMsg: null,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ errMsg: error.msg.msg });
      } else {
        this.setState({ errMsg: null });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, role, department } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password,
      role,
      department,
    };

    // Attempt to register
    await this.props.register(newUser);
    this.setState({
      errMsg: null,
      successMsg: "Employee registered succesfully",
    });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Register Employee</strong>
        </CardHeader>
        <CardBody>
          <Form
            // action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
            onSubmit={this.handleSubmit}
          >
            {this.state.errMsg ? (
              <Alert color="danger">{this.state.errMsg}</Alert>
            ) : this.state.successMsg ? (
              <Alert>{this.state.successMsg}</Alert>
            ) : null}
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="name"
                  name="name"
                  placeholder="name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Role</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="role"
                  id="role"
                  value={this.state.role}
                  onChange={this.handleChange}
                >
                  <option value="0">Please select</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Technician">Technician</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Email</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  id="email"
                  name="email"
                  placeholder="email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Password</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Department</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="department"
                  id="department"
                  value={this.state.department}
                  onChange={this.handleChange}
                >
                  <option value="NA">Please select</option>
                  <option value="reception">reception</option>
                  <option value="OR">OR</option>
                  <option value="cardiology">cardiology</option>
                  <option value="surgery">surgery</option>
                </Input>
              </Col>
            </FormGroup>
            <Button
              className="btn-pill"
              type="submit"
              size="lg"
              color="primary"
            >
              <i className="fa fa-dot-circle-o"></i> Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { register })(AddEmployee);
