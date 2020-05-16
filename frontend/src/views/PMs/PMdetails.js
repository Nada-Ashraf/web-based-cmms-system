import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class PMdetails extends Component {
  state = { pm: {}, id: this.props.match.params.id };

  componentDidMount() {
    fetch("/api/pms/" + this.state.id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((pm) => {
        this.setState({ pm });
      });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>
              <i className="icon-info pr-1"></i>PM id:{" "}
              {this.props.match.params.id}
            </strong>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <td>{this.state.pm.title}</td>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PMdetails;

// import React, { Component } from "react";

// class PMdetails extends Component {
//   state = {};
//   render() {
//     return <h1>{this.props.match.params.id}</h1>;
//   }
// }

// export default PMdetails;
