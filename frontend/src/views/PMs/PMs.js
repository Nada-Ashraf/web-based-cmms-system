import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

const getBadge = (status) => {
  return status === "Done"
    ? "success"
    : status === "Assigned"
    ? "secondconditionary"
    : status === "Not Assigned"
    ? "warning"
    : status === "There's an issue"
    ? "danger"
    : "primary";
};

class PMs extends Component {
  state = { pms: [] };

  componentDidMount() {
    fetch("/api/pms")
      .then((res) => res.json())
      .then((pms) => {
        // CHECK
        if (this.props.role === "Technician") {
          const pmsFiltered = pms.filter(
            (pm) =>
              pm.assigned_to._id.includes(this.props._id) &&
              pm.asset.department.includes(this.props.department)
          );
          this.setState({ pms: pmsFiltered });
        } else if (this.props.role === "Supervisor") {
          const pmsFiltered = pms.filter((pm) =>
            pm.asset.department.includes(this.props.department)
          );
          this.setState({ pms: pmsFiltered });
        } else {
          this.setState({ pms });
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
                  <th scope="col">Schedules</th>
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
                    <td>{pm.schedules}</td>
                    {/* <td>{pm.assigned_to.name}</td> */}
                    <td>
                      <Badge color={getBadge(pm.status)}>{pm.status}</Badge>
                    </td>
                    <td>
                      {isManager ? (
                        <React.Fragment>
                          <Button
                            className="float-right"
                            color="ghost-danger"
                            onClick={() => {
                              this.handleDelete(pm._id);
                            }}
                          >
                            <i className="icon-trash"></i>&nbsp;Delete
                          </Button>
                          {/* <Button className="float-right" color="ghost-success">
                            <i className=" icon-pencil"></i>&nbsp;Edit
                          </Button> */}
                          <Link to={`/home/PMs/${pm._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Instructions
                            </Button>
                          </Link>
                        </React.Fragment>
                      ) : isSupervisor ? (
                        <React.Fragment>
                          {pm.status === "Not Assgined" || ( // CHECK
                            <Link
                              to={{
                                pathname: "/home/PMs/assign_pm",
                                id: pm._id,
                                status: pm.status,
                              }}
                              // to="/home/PMs/assign_pm"
                              // params={{ id: pm._id }}
                            >
                              <Button
                                className="float-right"
                                color="ghost-success"
                              >
                                <i className=" icon-pencil"></i>&nbsp;Assign
                                work
                              </Button>
                            </Link>
                          )}
                          <Link to={`/home/PMs/${pm._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Instructions
                            </Button>
                          </Link>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {" "}
                          {pm.status === "Assigned" || (
                            <Link
                              to={{
                                pathname: "/home/PMs/complete_pm",
                                id: pm._id,
                                status: pm.status,
                              }}
                            >
                              <Button
                                className="float-right"
                                color="ghost-success"
                              >
                                <i className=" icon-pencil"></i>&nbsp;Complete
                                work
                              </Button>
                            </Link>
                          )}
                          <Link to={`/home/PMs/${pm._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Instructions
                            </Button>
                          </Link>
                        </React.Fragment>
                      )}
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

export default connect(mapStateToProps, { login })(PMs);
