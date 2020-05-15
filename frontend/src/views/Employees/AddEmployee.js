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
  Progress,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class AddEmployee extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    role: "",
    department: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
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
    this.props.register(newUser);
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
                <Label htmlFor="text-input">email</Label>
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
                <Label htmlFor="text-input">password</Label>
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
                  <option value="0">Please select</option>
                  <option value="cardiology">cardiology</option>
                  <option value="radiology">radiology</option>
                  <option value="operations">operations</option>
                </Input>
              </Col>
            </FormGroup>
            {/* <Link to={`/Assets/add_asset/${this.state._id}`}> */}
            <Button
              className="btn-pill"
              type="submit"
              size="lg"
              color="primary"
            >
              <i className="icon-arrow-right-circle"></i> Submit
              {/* <i className="fa fa-dot-circle-o"></i> Submit */}
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(AddEmployee);
