import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback,
} from "react-form-with-constraints";

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
    supply_company: "",
    operation_date: "",
    warranty_period: "",
    price: "",
    maintenance_company: "",
    contract_type: "",
    contract_start_date: "",
    contract_end_date: "",
    recieved_by: "",
    status: "In service",
    notes: "",
    description: "",
    classification: "",
    lifetime: "",
    proper_freq_of_use: "",
    electricity_sensitivity: "",
    risk_level: "",
    work_env: "",
    efficiency: "",
    alarms: "", //array
    accessories: "", //array
    sterilization: "",
    // pms
    accordion: [true, false, false],
    pm_title: "",
    pm_instructions: "",
    pm_schedules: "",
    errorMessage: null,
  };

  toggleAccordion = (tab) => {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  };

  handleChange = (event) => {
    this.form.validateFields(event.target);
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log("form is invalid: do not submit");
    } else {
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
          supply_company: this.state.supply_company,
          operation_date: this.state.operation_date,
          warranty_period: this.state.warranty_period,
          price: this.state.price,
          maintenance_company: this.state.maintenance_company,
          contract_type: this.state.contract_type,
          contract_start_date: this.state.contract_start_date,
          contract_end_date: this.state.contract_end_date,
          recieved_by: this.state.recieved_by,
          status: this.state.status,
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
        .then((asset) => this.setState({ _id: asset._id }))
        .then(() => {
          fetch("/api/pms/add_pm/", {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: this.state.pm_title,
              instructions: this.state.pm_instructions,
              asset: this.state._id,
              status: "Not Assigned",
            }),
          });
        })
        .then(() => this.props.history.push("/home/Assets"));
    }
  };

  errorMsg = (name) => {
    return (
      <FieldFeedbacks for={name}>
        <FieldFeedback style={{ color: "red" }} when="*" />
      </FieldFeedbacks>
    );
  };

  card = () => {
    return (
      <React.Fragment>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">Title</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="text"
              value={this.state.pm_title}
              onChange={this.handleChange}
              id="pm_title"
              name="pm_title"
              placeholder="PM title"
              required
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
              required
            >
              <option value="">Please select</option>
              <option value="reception">reception</option>
              <option value="open heart icu">open heart icu</option>
              <option value="surgery">surgery</option>
              <option value="cardiology">cardiology</option>
            </Input>
            {this.errorMsg("department")}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="textarea-input">Instructions</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              value={this.state.pm_instructions}
              onChange={this.handleChange}
              type="textarea"
              name="pm_instructions"
              id="pm_instructions"
              rows="9"
              placeholder="PM instructions"
            />
          </Col>
        </FormGroup>
      </React.Fragment>
    );
  };

  render() {
    const brands = ["philips", "3A healthcare"];
    let brandOptionItems = brands.map((brand) => (
      <option value={brand}>{brand}</option>
    ));
    const classifications = ["life support devices"];
    let classificationOptionItems = classifications.map((classification) => (
      <option value={classification}>{classification}</option>
    ));
    return (
      <FormWithConstraints
        // action=""
        method="post"
        ref={(form) => (this.form = form)}
        encType="multipart/form-data"
        className="form-horizontal"
        onSubmit={this.handleSubmit}
        noValidate
      >
        <Card>
          <CardHeader>
            <strong>Basic info</strong>
          </CardHeader>
          <CardBody>
            {this.state.errorMessage ? (
              <Alert color="danger">{this.state.errorMessage}</Alert>
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
                  placeholder="Asset name"
                  required
                  minLength={5}
                />
                {this.errorMsg("name")}
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
                  required
                />
                {this.errorMsg("serial_number")}
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
                  required
                >
                  <option value="">Please select</option>
                  <option value="reception">reception</option>
                  <option value="open heart icu">open heart icu</option>
                  <option value="cardiology">cardiology</option>
                  <option value="surgery">surgery</option>
                </Input>
                {this.errorMsg("department")}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Brand</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="brand"
                  id="brand"
                  value={this.state.brand}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Please select</option>
                  {brandOptionItems}
                </Input>
                {this.errorMsg("brand")}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Classification</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="classification"
                  id="classification"
                  value={this.state.classification}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Please select</option>
                  {classificationOptionItems}
                </Input>
                {this.errorMsg("classification")}
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
                <Label htmlFor="text-input">Supply company</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.suuply_company}
                  onChange={this.handleChange}
                  type="text"
                  id="suuply_company"
                  name="suuply_company"
                  placeholder="Warranty period in months"
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
        {/* Operation info */}
        <Card>
          <CardHeader>
            <strong>Operation info</strong>
          </CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Lifetime (in years)</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.lifetime}
                  onChange={this.handleChange}
                  id="lifetime"
                  name="lifetime"
                  placeholder="Lifetime (in years)"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">efficiency</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.efficiency}
                  onChange={this.handleChange}
                  id="efficiency"
                  name="efficiency"
                  placeholder="Asset efficiency"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Proper frequency of use</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.proper_freq_of_use}
                  onChange={this.handleChange}
                  id="proper_freq_of_use"
                  name="proper_freq_of_use"
                  placeholder="Proper frequency of use"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Electricity sensitivity</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="electricity_sensitivity"
                  id="electricity_sensitivity"
                  value={this.state.electricity_sensitivity}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="Class |">Class |</option>
                  <option value="Class ||">Class ||</option>
                  <option value="Class |||">Class |||</option>
                </Input>
                {this.errorMsg("electricity_sensitivity")}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Risk Level</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="risk_level"
                  id="risk_level"
                  value={this.state.risk_level}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Input>
                {this.errorMsg("risk_level")}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Work environment</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.work_env}
                  onChange={this.handleChange}
                  type="textarea"
                  name="work_env"
                  id="work_env"
                  rows="9"
                  placeholder="Describe proper work environment"
                />
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
        {/* Device Details */}
        <Card>
          <CardHeader>
            <strong>Device Details</strong>
          </CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Sterilization</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.sterilization}
                  onChange={this.handleChange}
                  type="textarea"
                  name="sterilization"
                  id="sterilization"
                  rows="9"
                  placeholder="Sterilization"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Alarms</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.alarms}
                  onChange={this.handleChange}
                  type="textarea"
                  name="alarms"
                  id="alarms"
                  rows="9"
                  placeholder="alarms"
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>PM Details</CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Title</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.pm_title}
                  onChange={this.handleChange}
                  id="pm_title"
                  name="pm_title"
                  placeholder="PM title"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Instructions</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.pm_instructions}
                  onChange={this.handleChange}
                  type="textarea"
                  name="pm_instructions"
                  id="pm_instructions"
                  rows="9"
                  placeholder="Instructions"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Schedules</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.pm_schedules}
                  onChange={this.handleChange}
                  type="select"
                  name="pm_schedules"
                  id="pm_schedules"
                  rows="9"
                  placeholder="PM schedules"
                  required
                >
                  <option value="">Please select</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                  <option value="every 3 months">every 3 months</option>
                  <option value="every 6 months">every 6 months</option>
                  <option value="annual">annual</option>
                </Input>
                {this.errorMsg("pm_schedules")}
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
        <Button className="btn-pill" type="submit" size="lg" color="primary">
          <i className="icon-arrow-right-circle"></i> Submit
        </Button>
      </FormWithConstraints>
    );
  }
}

export default AddAsset;
