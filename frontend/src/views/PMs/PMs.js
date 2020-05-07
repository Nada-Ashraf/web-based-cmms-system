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
  state = { pms: [] };

  componentDidMount() {
    fetch("/api/pms")
      .then((res) => res.json())
      .then((pms) => this.setState({ pms }));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> PMs{" "}
            <small className="text-muted">list</small>
            {/* <Link to="/Assets/add_asset"> */}
            <Button className="float-right" color="primary">
              <i className="icon-plus"></i>
              &nbsp;Add PM
            </Button>
            {/* </Link> */}
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
                {this.state.pms.map((pm) => (
                  <tr key={pm._id}>
                    <td>{pm.title}</td>
                    <td>
                      {/* <Link to={`/pms/${pm._id}`}>{pm.name}</Link> */}
                      {pm.asset.name}
                    </td>
                    <td>{pm.asset.department}</td>
                    <td>{pm.schedules}</td>
                    <td>{pm.assigned_to.name}</td>
                    <td>
                      <Badge color={getBadge(pm.status)}>{pm.status}</Badge>
                    </td>
                    <td>
                      <Button className="float-right" color="ghost-danger">
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
