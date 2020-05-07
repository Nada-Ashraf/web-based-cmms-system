import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table } from "reactstrap";

const getBadge = (status) => {
  return status === "In service"
    ? "success"
    : status === "Scrapped"
    ? "secondary"
    : status === "Need repair"
    ? "warning"
    : status === "Out of service"
    ? "danger"
    : "primary";
};

class Reports extends Component {
  state = { reports: [] };

  componentDidMount() {
    fetch("/api/reports")
      .then((res) => res.json())
      .then((reports) => this.setState({ reports }));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> reports{" "}
            <small className="text-muted">list</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Model</th>
                  <th scope="col">Serial Number</th>
                  <th scope="col">Department</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.reports.map((report) => (
                  <tr key={report.serial_number}>
                    <td>
                      {/* <Link to={`/reports/${report._id}`}>{report.name}</Link> */}
                      {report.name}
                    </td>
                    <td>{report.model}</td>
                    <td>{report.serial_number}</td>
                    <td>{report.department}</td>
                    <td>
                      <Badge color={getBadge(report.condition)}>
                        {report.condition}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Reports;
