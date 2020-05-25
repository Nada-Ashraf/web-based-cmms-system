import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import moment from "moment";

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

class SupervisorReports extends Component {
  state = { pms: [], wos: [] };

  componentDidMount() {
    Promise.all([fetch("/api/pms"), fetch("/api/wos")])
      .then(([pms, wos]) => Promise.all([pms.json(), wos.json()]))
      .then(([pms, wos]) => {
        if (this.props.role === "Supervisor") {
          const pmsFiltered = pms.filter((pm) =>
            pm.asset.department.includes(this.props.department)
          );
          const wosFiltered = wos.filter((wo) =>
            wo.asset.department.includes(this.props.department)
          );
          this.setState({ pms: pmsFiltered, wos: wosFiltered });
        } else if (this.props.role === "Manager") {
          this.setState({ pms, wos });
        }
      });
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch("/api/pms/delete/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          return response.json();
        })
        .then(() => {
          window.location.reload(false);
        });
    }
  };
  render() {
    const isManager = this.props.role === "Manager";
    const isSupervisor = this.props.role === "Supervisor";
    const { pms, wos } = this.state;
    const data = pms.concat(wos);
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Department{" "}
            <small className="text-muted">PMs</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">PM name</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Return date</th>
                  {/* <th scope="col">Assigned to</th> */}
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.pms.map((pm) => (
                  <tr key={pm._id}>
                    <td>{pm.title}</td>
                    <td>
                      <Link to={`/home/Assets/${pm.asset._id}`}>
                        {pm.asset.name}
                      </Link>
                    </td>
                    <td>
                      {moment(pm.report_date).format("dddd, MMMM Do YYYY")}
                    </td>
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
                        <Button className="float-right" color="ghost-success">
                          <i className="icon-list"></i>
                          &nbsp;View Report
                        </Button>
                      </Link>
                      <Link to={`/home/PMs/${pm._id}`}>
                        <Button className="float-right" color="ghost-primary">
                          <i className="icon-list"></i>
                          &nbsp;Instructions
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Department{" "}
            <small className="text-muted">WOs</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">WO name</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Return date</th>
                  {/* <th scope="col">Assigned to</th> */}
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.wos.map((pm) => (
                  <tr key={pm._id}>
                    <td>{pm.title}</td>
                    <td>
                      <Link to={`/home/Assets/${pm.asset._id}`}>
                        {pm.asset.name}
                      </Link>
                    </td>
                    <td>
                      {moment(pm.report_date).format("dddd, MMMM Do YYYY")}
                    </td>
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
                        <Button className="float-right" color="ghost-success">
                          <i className="icon-list"></i>
                          &nbsp;View Report
                        </Button>
                      </Link>
                      <Link to={`/home/PMs/${pm._id}`}>
                        <Button className="float-right" color="ghost-primary">
                          <i className="icon-list"></i>
                          &nbsp;Instructions
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

export default connect(mapStateToProps, { login })(SupervisorReports);
