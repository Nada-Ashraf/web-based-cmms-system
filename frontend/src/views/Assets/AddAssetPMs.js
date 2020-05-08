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
  Badge,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

class AddAssetPMs extends Component {
  state = {
    accordion: [true, false, false],
    title: "",
    asset: this.props.match.params.id,
    instructions: "",
  };

  toggleAccordion = (tab) => {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
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

  card = () => {
    return (
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
        <Button className="btn-pill" type="submit" size="lg" color="primary">
          <i className="fa fa-dot-circle-o"></i> Add
        </Button>
        {/* </Link> */}
      </Form>
    );
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Add PM details{" "}
        </CardHeader>
        <CardBody>
          <div id="accordion">
            <Card className="mb-0">
              <CardHeader id="headingOne">
                <Button
                  block
                  color="link"
                  className="text-left m-0 p-0"
                  onClick={() => this.toggleAccordion(0)}
                  aria-expanded={this.state.accordion[0]}
                  aria-controls="collapseOne"
                >
                  <h5 className="m-0 p-0">PM #1</h5>
                </Button>
              </CardHeader>
              <Collapse
                isOpen={this.state.accordion[0]}
                data-parent="#accordion"
                id="collapseOne"
                aria-labelledby="headingOne"
              >
                <CardBody>{this.card()}</CardBody>
              </Collapse>
            </Card>
            <Card className="mb-0">
              <CardHeader id="headingTwo">
                <Button
                  block
                  color="link"
                  className="text-left m-0 p-0"
                  onClick={() => this.toggleAccordion(1)}
                  aria-expanded={this.state.accordion[1]}
                  aria-controls="collapseTwo"
                >
                  <h5 className="m-0 p-0">PM #2</h5>
                </Button>
              </CardHeader>
              <Collapse
                isOpen={this.state.accordion[1]}
                data-parent="#accordion"
                id="collapseTwo"
              >
                <CardBody>{this.card()}</CardBody>
              </Collapse>
            </Card>
            <Card className="mb-0">
              <CardHeader id="headingThree">
                <Button
                  block
                  color="link"
                  className="text-left m-0 p-0"
                  onClick={() => this.toggleAccordion(2)}
                  aria-expanded={this.state.accordion[2]}
                  aria-controls="collapseThree"
                >
                  <h5 className="m-0 p-0">PM #3</h5>
                </Button>
              </CardHeader>
              <Collapse
                isOpen={this.state.accordion[2]}
                data-parent="#accordion"
                id="collapseThree"
              >
                <CardBody>{this.card()}</CardBody>
              </Collapse>
            </Card>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default AddAssetPMs;
