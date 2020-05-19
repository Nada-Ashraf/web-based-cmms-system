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

class AddAsset extends Component {
  state = {
    _id: "",
    name: "",
    serial_number: "",
    model: "",
    brand: "",
    department: "",
    COO: "",
    supply_date: "",
    operation_date: "",
    supply_country: "",
    warranty_period: "",
    parts: "",
    price: "",
    maintenance_company: "",
    contract_type: "",
    contract_start_date: "",
    contract_end_date: "",
    recieved_by: "",
    condition: "",
    notes: "",
    description: "",
    classification: "",
    lifetime: "",
    proper_freq_of_use: "",
    electricity_sensitivity: "",
    risk_level: "",
    work_env: "",
    efficiency: "",
    alarms: "",
    accessories: "",
    sterilization: "",
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
    fetch("/api/assets/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        serial_number: this.state.serial_number,
        model: this.state.model,
        brand: this.state.brand,
        department: this.state.department,
        COO: this.state.COO,
        supply_date: this.state.supply_date,
        operation_date: this.state.operation_date,
        supply_country: this.state.supply_country,
        warranty_period: this.state.warranty_period,
        parts: this.state.parts,
        price: this.state.price,
        maintenance_company: this.state.maintenance_company,
        contract_type: this.state.contract_type,
        contract_start_date: this.state.contract_start_date,
        contract_end_date: this.state.contract_end_date,
        recieved_by: this.state.recieved_by,
        condition: this.state.condition,
        notes: this.state.notes,
        description: this.state.description,
        classification: this.state.classification,
        lifetime: this.state.lifetime,
        proper_freq_of_use: this.state.proper_freq_of_use,
        electricity_sensitivity: this.state.electricity_sensitivity,
        risk_level: this.state.risk_level,
        work_env: this.state.work_env,
        efficiency: this.state.efficiency,
        alarms: this.state.alarms,
        accessories: this.state.accessories,
        sterilization: this.state.sterilization,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ _id: data._id }));
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
                  value={this.state.asset_name}
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
                  value={this.state.model}
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
                  value={this.state.location}
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
                  value={this.state.price}
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
                  value={this.state.supplier}
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
              <i className="icon-arrow-right-circle"></i> Submit
            </Button>
            <Link to={`/home/Assets/add_asset/${this.state._id}`}>
              <Button className="btn-pill" size="lg" color="primary">
                <i className="icon-arrow-right-circle"></i> Add PMs
              </Button>
            </Link>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default AddAsset;
