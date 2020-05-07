import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class Info extends Component {
  state = { info: [] };

  componentDidMount() {
    fetch("/api/assets/" + this.props.id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((info) => this.setState({ info }));
  }
  render() {
    // return <h1>Hi {this.state.info._id}</h1>;
    return (
      <Card>
        <CardHeader>
          <strong>
            <i className="icon-info pr-1"></i>Asset id: {this.state.info._id}
          </strong>
        </CardHeader>
        <CardBody>
          <Table responsive striped hover>
            <tbody>
              <td>{this.state.info.name}</td>
              <tr>{this.state.info.serial_number}</tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default Info;
