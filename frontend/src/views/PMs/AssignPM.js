// this.props.location.id
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
import { login } from "../../actions/authActions";
class AssignPMs extends Component {
  state = {
    id: this.props.location.id,
    users: [],
  };

  componentDidMount() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((users) => {
        const usersFiltered = users.filter(
          (user) =>
            user.role.includes("Technician") &&
            user.department.includes(this.props.department)
        );
        this.setState({ users: usersFiltered });
      });
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     fetch("/api/assets/add_asset", {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: this.state.asset_name,
  //         serial_number: this.state.serial_number,
  //         model: this.state.model,
  //         department: this.state.department,
  //         price: this.state.price,
  //         location: this.state.location,
  //         supplier: this.state.supplier,
  //         notes: this.state.notes,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ _id: data._id }));
  //   };

  render() {
    let users = this.state.users;
    let optionItems = users.map((user) => (
      <option key={user.name}>{user.name}</option>
    ));
    return (
      <Card>
        <CardHeader>
          <strong>Add asset info</strong>
        </CardHeader>
        <CardBody>
          <Form
            // action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
            // onSubmit={this.handleSubmit}
          >
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Assign to</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="assign_to"
                  id="assign_to"
                  value={this.state.assign_to}
                  onChange={this.handleChange}
                >
                  {optionItems}
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
  role: state.auth.user.role,
  department: state.auth.user.department,
});

export default connect(mapStateToProps, { login })(AssignPMs);
