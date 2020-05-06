import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class AddAsset extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch("/api/assets/add_asset", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     //make sure to serialize your JSON body
  //     body: JSON.stringify({
  //       name: this.name.value,
  //     }),
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }

  constructor(props) {
    super(props);
    this.state = { asset_name: "", serial_number: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // const value = event.target.value;
    // this.setState({
    //   ...this.state,
    //   [event.target.name]: value,
    // });
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    alert("A value was submitted: " + this.state.asset_name);
    event.preventDefault();
    fetch("/api/assets/add_asset", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: this.state.asset_name,
        serial_number: this.state.serial_number,
      }),
    }).then((response) => {
      console.log(response);
    });
    // event.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Add Asset</strong>
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
                  value={this.state.asset_name}
                  // onChange={(event) => {
                  //   this.setState({ value: event.target.value });
                  // }}
                  onChange={this.handleChange}
                  id="asset_name"
                  name="asset_name"
                  placeholder="Asset name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Serial number</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.serial_number}
                  onChange={this.handleChange}
                  // onChange={(event) => {
                  //   this.setState({
                  //     serial_number: event.target.serial_number,
                  //   });
                  // }}
                  type="text"
                  id="serial_number"
                  name="serial_number"
                  placeholder="Serial number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Model</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Asset model"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input">Registeration date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="Registeration date"
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Department</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="select" name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Location</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Asset exact location"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Purchase Price</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Asset purchase price"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Supplier</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="select" name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="file-input">Image</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="file" id="file-input" name="file-input" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="file-input">Manual</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="file" id="file-input" name="file-input" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Notes</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="textarea"
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Notes"
                />
              </Col>
            </FormGroup>
            <Button type="submit" size="sm" color="primary">
              <i className="fa fa-dot-circle-o"></i> Submit
            </Button>
          </Form>
        </CardBody>
        {/* <CardFooter>
          <Button type="submit" size="sm" color="primary">
            <i className="fa fa-dot-circle-o"></i> Submit
          </Button>
          <Button type="reset" size="sm" color="danger">
            <i className="fa fa-ban"></i> Reset
          </Button>
        </CardFooter> */}
      </Card>
    );
  }
}

export default AddAsset;
