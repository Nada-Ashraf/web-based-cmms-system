import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class Asset extends Component {
  render() {
    return <h1>{this.props.match.params.id}</h1>;
  }
}

export default Asset;
