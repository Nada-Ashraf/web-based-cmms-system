import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table } from "reactstrap";

const getBadge = (status) => {
  return status === "In service"
    ? "success"
    : status === "Scrapped"
    ? "secondconditionary"
    : status === "Need repair"
    ? "warning"
    : status === "Out of service"
    ? "danger"
    : "primary";
};

class PMs extends Component {
  state = { assets: [] };

  componentDidMount() {
    fetch("/api/assets")
      .then((res) => res.json())
      .then((assets) => this.setState({ assets }));
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
                  <th scope="col">PM name</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Department</th>
                  <th scope="col">Schedules</th>
                  <th scope="col">Assigned to</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map((asset) => (
                  <tr key={asset.pm.title}>
                    <td>
                      {/* <Link to={`/assets/${asset._id}`}>{asset.name}</Link> */}
                      {asset.name}
                    </td>
                    <td>{asset.department}</td>
                    <td>{asset.pm.schedules}</td>
                    <td>{asset.pm.assigned_to}</td>
                    <td>
                      <Badge color={getBadge(asset.pm.status)}>
                        {asset.pm.status}
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

export default PMs;
