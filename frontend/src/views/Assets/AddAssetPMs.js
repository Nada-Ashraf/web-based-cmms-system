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
} from "reactstrap";
import { Link } from "react-router-dom";

class AddAssetPMs extends Component {
  state = {
    title: "",
    asset: this.props.match.params.id,
    instructions: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/pms/add_pm/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        instructions: this.state.instructions,
        asset: this.state.asset,
        assigned_to: "5eab2fbef6eff8317a974eb4",
        status: "Done",
        schedules: "Weekly",
      }),
    }).then(() => {});
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Add PM details</strong>
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
                <Label htmlFor="text-input">Title</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  id="title"
                  name="title"
                  placeholder="Asset name"
                />
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
                  placeholder="Notes"
                />
              </Col>
            </FormGroup>

            {/* <Link to="/Assets/add_asset/add_asset_pms"> */}
            <Button
              className="btn-pill"
              type="submit"
              size="lg"
              color="primary"
            >
              <i className="fa fa-dot-circle-o"></i> Submit
            </Button>
            {/* </Link> */}
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default AddAssetPMs;

// class AddAssetPMs extends Component {
//   state = {};
//   render() {
//     return <h1>{this.props.match.params.id}</h1>;
//   }
// }

// export default AddAssetPMs;
