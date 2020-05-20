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
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
class AddWO extends Component {
  state = {
    // asset_id: this.props.location.asset_id,
    users: [],
    assets: [],
    title: "",
    asset: "5ebed42c307ec31364057238", //
    instructions: "",
    assigned_to: "",
    priority: "",
    importance: "",
    due_date: "",
    notes: "",
  };

  componentDidMount() {
    // fetch("/api/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     const usersFiltered = users.filter(
    //       (user) =>
    //         user.role.includes("Technician") &&
    //         user.department.includes(this.props.department)
    //     );
    //     this.setState({ users: usersFiltered });
    //   });

    Promise.all([
      fetch("/api/users"), //res1 // users
      fetch("/api/assets"), //res2 //assets
    ])
      .then(([users, assets]) => Promise.all([users.json(), assets.json()]))
      .then(([users, assets]) => {
        const usersFiltered = users.filter(
          (user) =>
            user.role.includes("Technician") &&
            user.department.includes(this.props.department)
        );
        const assetsFiltered = assets.filter((asset) =>
          asset.department.includes(this.props.department)
        );
        this.setState({ users: usersFiltered, assets: assetsFiltered });
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
    fetch("/api/wos/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        asset: this.state.asset,
        instructions: this.state.instructions,
        assigned_to: this.state.assigned_to,
        priority: this.state.priority,
        importance: this.state.importance,
        due_date: this.state.due_date,
        notes: this.state.notes,
      }),
    }).then((response) => response.json());
    // .then(() => this.props.history.push("/home/PMs"));
    this.props.history.push("/home/WOs");
  };

  render() {
    let users = this.state.users;
    let usersOptionItems = users.map((user) => (
      <option value={user._id}>{user.name}</option>
    ));

    let assets = this.state.assets;
    let assetsOptionItems = assets.map((asset) => (
      <option value={asset._id}>{asset.serial_number}</option>
    ));

    return (
      <Card>
        <CardHeader>
          <strong>Create Work Order</strong>
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
                <Label htmlFor="text-input">WO title</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  id="title"
                  name="title"
                  placeholder="WO Title"
                />
              </Col>
            </FormGroup>
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
                  {usersOptionItems}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Asset</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="asset"
                  id="asset"
                  value={this.state.asset}
                  onChange={this.handleChange}
                >
                  {assetsOptionItems}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Instructions</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.instructions}
                  onChange={this.handleChange}
                  type="textarea"
                  name="instructions"
                  id="instructions"
                  rows="9"
                  placeholder="instructions"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Priority</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="priority"
                  id="priority"
                  value={this.state.priority}
                  onChange={this.handleChange}
                >
                  <option value="">Please select</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Not Urgent">Not Urgent</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Importance</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="importance"
                  id="importance"
                  value={this.state.importance}
                  onChange={this.handleChange}
                >
                  <option value="">Please select</option>
                  <option value="Important">Important</option>
                  <option value="Not Important">Not Important</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input"> Due Date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  value={this.state.due_date}
                  onChange={this.handleChange}
                  id="due_date"
                  name="due_date"
                  placeholder="due date"
                />
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
    );
  }
}

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
});

export default connect(mapStateToProps, { login })(AddWO);

// import React, { Component } from "react";

// class AddWO extends Component {
//   state = {};
//   render() {
//     return <h1>{this.props.location.id}</h1>;
//   }
// }

// export default AddWO;
