import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  CardFooter,
  Alert,
} from "reactstrap";

class ViewReport extends Component {
  state = {
    data: {},
    id: this.props.location.id,
    status: this.props.location.status,
  };

  componentDidMount() {
    fetch(this.props.location.endpoint + this.state.id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const status =
      this.state.status === "Done" || this.state.status === "There's an issue";

    return (
      <div className="animated fadeIn">
        {status ? (
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1"></i>Report Title:{" "}
                {this.state.data.report_title}{" "}
              </strong>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover>
                <tr>
                  <td>{this.state.data.report_body}</td>
                </tr>
              </Table>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        ) : (
          <Alert color="danger">No report yet</Alert>
        )}
      </div>
    );
  }
}

export default ViewReport;
