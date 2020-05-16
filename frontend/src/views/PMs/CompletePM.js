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
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class CompletePM extends Component {
  state = {
    id: this.props.location.id,
    report_title: "",
    report_body: "",
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
    fetch("/api/pms/" + this.state.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        report_title: this.state.report_title,
        report_body: this.state.report_body,
      }),
    }).then((response) => response.json());
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Complete PM Work</strong>
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
                <Label htmlFor="text-input">Title</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  value={this.state.report_title}
                  onChange={this.handleChange}
                  id="report_title"
                  name="report_title"
                  placeholder="Report title"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Notes</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  value={this.state.report_body}
                  onChange={this.handleChange}
                  type="textarea"
                  name="report_body"
                  id="report_body"
                  rows="9"
                  placeholder="report body"
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

export default connect(mapStateToProps, { login })(CompletePM);
