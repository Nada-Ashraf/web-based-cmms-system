import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

class AddAsset extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Add Asset</strong>
        </CardHeader>
        <CardBody>
          <Form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
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
                  type="text"
                  id="text-input"
                  name="text-input"
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
          </Form>
        </CardBody>
        <CardFooter>
          <Button type="submit" size="sm" color="primary">
            <i className="fa fa-dot-circle-o"></i> Submit
          </Button>
          <Button type="reset" size="sm" color="danger">
            <i className="fa fa-ban"></i> Reset
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default AddAsset;
