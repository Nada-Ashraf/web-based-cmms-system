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
    warranty_period: "",
    parts: "", // note
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
      <Form
        // action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
        onSubmit={this.handleSubmit}
      >
        <Card>
          <CardHeader>
            <strong>Basic info</strong>
          </CardHeader>
          <CardBody>
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
                <Label htmlFor="text-input">Brand</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Asset brand"
                  value={this.state.brand}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Classification</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.classification}
                  onChange={this.handleChange}
                  type="text" // note
                  name="classification"
                  id="classification"
                  rows="9"
                  placeholder="classification"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Description</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.description}
                  onChange={this.handleChange}
                  type="textarea"
                  name="description"
                  id="description"
                  rows="9"
                  placeholder="description"
                />
              </Col>
            </FormGroup>
            {/* <Button
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
            </Link> */}
          </CardBody>
        </Card>
        {/* Supplement info */}
        <Card>
          <CardHeader>
            <strong>Supplement info</strong>
          </CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Country of origin</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.COO}
                  onChange={this.handleChange}
                  id="COO"
                  name="COO"
                  placeholder="Country of origin"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input">Supply date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  value={this.state.supply_date}
                  onChange={this.handleChange}
                  id="supply_date"
                  name="supply_date"
                  placeholder="date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input">Contract end date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  value={this.state.contract_end_date}
                  onChange={this.handleChange}
                  id="contract_end_date"
                  name="contract_end_date"
                  placeholder="date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Warranty period</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.warranty_period}
                  onChange={this.handleChange}
                  type="text"
                  id="warranty_period"
                  name="warranty_period"
                  placeholder="Warranty period in months"
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
          </CardBody>
        </Card>
        {/* Maintenance info */}
        <Card>
          <CardHeader>
            <strong>Maintenance info</strong>
          </CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Maintenance company</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.maintenance_company}
                  onChange={this.handleChange}
                  id="maintenance_company"
                  name="maintenance_company"
                  placeholder="Maintenance company"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Contract type</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.contract_type}
                  onChange={this.handleChange}
                  id="contract_type"
                  name="contract_type"
                  placeholder="Contract type"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input">Contract start date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  value={this.state.contract_start_date}
                  onChange={this.handleChange}
                  id="contract_start_date"
                  name="contract_start_date"
                  placeholder="date"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="date-input">Contract end date</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  value={this.state.operation_date}
                  onChange={this.handleChange}
                  id="operation_date"
                  name="operation_date"
                  placeholder="date"
                />
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
      </Form>
    );
  }
}

export default AddAsset;
