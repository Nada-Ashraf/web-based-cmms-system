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

class EditAsset extends Component {
  state = {
    _id: this.props.location.id,
    // asset_name: "",
    // serial_number: "",
    // model: "",
    // department: "",
    // price: "",
    // location: "",
    // supplier: "",
    // notes: "",
    asset: [],
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
    fetch("/api/assets/" + this.state.id, {
      method: "get",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: this.state.asset_name,
      //     serial_number: this.state.serial_number,
      //     model: this.state.model,
      //     department: this.state.department,
      //     price: this.state.price,
      //     location: this.state.location,
      //     supplier: this.state.supplier,
      //     notes: this.state.notes,
      //   }),
    })
      .then((response) => response.json())
      .then((asset) => this.setState({ asset }));
  };

  render() {
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
            onSubmit={this.handleSubmit}
          >
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.asset.asset_name}
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
                  value={this.state.asset.serial_number}
                  onChange={this.handleChange}
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
                  value={this.state.asset.model}
                  onChange={this.handleChange}
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Asset model"
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
                  value={this.state.asset.department}
                  onChange={this.handleChange}
                >
                  <option value="NA">Please select</option>
                  <option value="reception">reception</option>
                  <option value="open heart icu">open heart icu</option>
                  <option value="cardiology & surgery">
                    cardiology & surgery
                  </option>
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
                  id="location"
                  name="location"
                  placeholder="Asset exact location"
                  value={this.state.asset.location}
                  onChange={this.handleChange}
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
                  id="price"
                  name="price"
                  placeholder="Asset purchase price"
                  value={this.state.asset.price}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Supplier</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.asset.supplier}
                  onChange={this.handleChange}
                  type="select"
                  name="supplier"
                  id="supplier"
                >
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
                <Input type="file" id="image" name="image" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="file-input">Manual</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="file" id="manual" name="manual" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Notes</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.asset.notes}
                  onChange={this.handleChange}
                  type="textarea"
                  name="notes"
                  id="notes"
                  rows="9"
                  placeholder="Notes"
                />
              </Col>
            </FormGroup>
            {/* <Link to={`/Assets/add_asset/${this.state.asset._id}`}> */}
            <Button
              className="btn-pill"
              type="submit"
              size="lg"
              color="primary"
            >
              <i className="icon-arrow-right-circle"></i> Submit
              {/* <i className="fa fa-dot-circle-o"></i> Submit */}
            </Button>
            <Link to={`/home/Assets/add_asset/${this.state._id}`}>
              <Button className="btn-pill" size="lg" color="primary">
                <i className="icon-arrow-right-circle"></i> Add PMs
                {/* <i className="fa fa-dot-circle-o"></i> Submit */}
              </Button>
            </Link>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default EditAsset;
