import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";

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
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map((asset) => (
                  <tr key={asset.serial_number}>
                    <td>{asset.pm.title}</td>
                    <td>
                      {/* <Link to={`/assets/${asset._id}`}>{asset.name}</Link> */}
                      {asset.name}
                    </td>
                    <td>{asset.department}</td>
                    <td>{asset.pm.schedules}</td>
                    <td>{asset.pm.assigned_to.name}</td>
                    <td>
                      <Badge color={getBadge(asset.pm.status)}>
                        {asset.pm.status}
                      </Badge>
                    </td>
                    <td>
                      <Button
                        className="float-right"
                        color="ghost-danger"
                        onClick={() => {
                          this.handleDelete(asset._id);
                        }}
                      >
                        <i className="icon-trash"></i>&nbsp;Delete
                      </Button>
                      <Button className="float-right" color="ghost-success">
                        <i className=" icon-pencil"></i>&nbsp;Edit
                      </Button>
                      {/* <Link to={`/Assets/${asset._id}`}> */}
                      <Button className="float-right" color="ghost-primary">
                        <i className="icon-list"></i>
                        &nbsp;Details
                      </Button>
                      {/* </Link> */}
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
