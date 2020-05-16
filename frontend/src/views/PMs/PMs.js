import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

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
                    <td>{pm.asset.name}</td>
                    <td>{pm.asset.department}</td>
                    <td>{pm.schedules}</td>
                    {/* <td>{pm.assigned_to.name}</td> */}
                    <td>
                      <Badge color={getBadge(pm.status)}>{pm.status}</Badge>
                    </td>
                    <td>
                      {isManager ? (
                        <React.Fragment>
                          <Button className="float-right" color="ghost-danger">
                            <i className="icon-trash"></i>&nbsp;Delete
                          </Button>
                          <Button className="float-right" color="ghost-success">
                            <i className=" icon-pencil"></i>&nbsp;Edit
                          </Button>
                          <Link to={`/home/PMs/${pm._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Details
                            </Button>
                          </Link>
                        </React.Fragment>
                      ) : isSupervisor ? (
                        <React.Fragment>
                          <Link
                            to={{ pathname: "/home/PMs/assign_pm", id: pm._id }}
                            // to="/home/PMs/assign_pm"
                            // params={{ id: pm._id }}
                          >
                            <Button
                              className="float-right"
                              color="ghost-success"
                            >
                              <i className=" icon-pencil"></i>&nbsp;Assign work
                            </Button>
                          </Link>
                          <Button className="float-right" color="ghost-primary">
                            <i className="icon-list"></i>
                            &nbsp;Details
                          </Button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: "/home/PMs/complete_pm",
                              id: pm._id,
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
                          <Button className="float-right" color="ghost-primary">
                            <i className="icon-list"></i>
                            &nbsp;Details
                          </Button>
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
