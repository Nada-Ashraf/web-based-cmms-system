import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

const getBadge = (status) => {
  return status === "Done"
    ? "success"
    : status === "Assigned"
    ? "primary"
    : status === "Not Assigned"
    ? "warning"
    : status === "There's an issue"
    ? "danger"
    : "primary";
};

class PMReports extends Component {
  state = { pms: [] };

  componentDidMount() {
    fetch("/api/pms")
      .then((res) => res.json())
      .then((pms) => {
        // CHECK
        if (this.props.role === "Supervisor") {
          const pmsFiltered = pms.filter((pm) =>
            pm.asset.department.includes(this.props.department)
          );
          this.setState({ pms: pmsFiltered });
        } else {
          this.setState({ pms });
        }
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> PMs{" "}
            <small className="text-muted">list</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">PM name</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Department</th>
                  {/* <th scope="col">Assigned to</th> */}
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.pms.map((pm) => (
                  <tr key={pm._id}>
                    <td>{pm.title}</td>
                    <Link to={`/home/Assets/${pm.asset._id}`}>
                      <td>{pm.asset.name}</td>
                    </Link>
                    <td>{pm.asset.department}</td>
                    {/* <td>{pm.assigned_to.name}</td> */}
                    <td>
                      <Badge color={getBadge(pm.status)}>{pm.status}</Badge>
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/home/Reports/${pm._id}`,
                          id: pm._id,
                          status: pm.status,
                          endpoint: "/api/pms/",
                        }}
                      >
                        <Button className="float-right" color="ghost-primary">
                          <i className="icon-list"></i>
                          &nbsp;View Report
                        </Button>
                      </Link>
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

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
  department: state.auth.user.department,
  _id: state.auth.user._id,
});

export default connect(mapStateToProps, { login })(PMReports);
