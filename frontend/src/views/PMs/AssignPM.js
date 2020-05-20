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
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
class AssignPMs extends Component {
  state = {
    id: this.props.location.id,
    users: [],
    // CHECK
    assigned_to: "",
    notes: "",
    status: this.props.location.status,
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

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/pms/edit/" + this.state.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assigned_to: this.state.assigned_to,
        notes: this.state.notes,
        status: "Asssined",
      }),
    }).then((response) => response.json());
    // .then(() => this.props.history.push("/home/PMs"));
    this.props.history.push("/home/PMs");
  };

  render() {
    let users = this.state.users;
    let optionItems = users.map((user) => (
      <option value={user._id}>{user.name}</option>
    ));
    const status = this.state.status === "Not Assigned";

    return (
      <div>
        {status ? (
          <div>
            {" "}
            <Card>
              <CardHeader>
                <strong>Assign PM</strong>
              </CardHeader>
              <CardBody>
                <Form
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                  onSubmit={this.handleSubmit}
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Assign to</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        name="assigned_to"
                        id="assigned_to"
                        value={this.state.assigned_to}
                        onChange={this.handleChange}
                      >
                        {optionItems}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Notes</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        value={this.state.notes}
                        onChange={this.handleChange}
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="9"
                        placeholder="Notes"
                      />
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
                  {/* {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null} */}
                </Form>
              </CardBody>
            </Card>
          </div>
        ) : (
          <div>
            <Alert>This work has already been assigned</Alert>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
});

export default connect(mapStateToProps, { login })(AssignPMs);
