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

class WOs extends Component {
  state = { wos: [] };

  componentDidMount() {
    fetch("/api/wos")
      .then((res) => res.json())
      .then((wos) => {
        // CHECK
        if (this.props.role === "Technician") {
          const wosFiltered = wos.filter(
            (wo) =>
              wo.assigned_to._id.includes(this.props._id) &&
              wo.asset.department.includes(this.props.department)
          );
          this.setState({ wos: wosFiltered });
        } else if (this.props.role === "Supervisor") {
          const wosFiltered = wos.filter((wo) =>
            wo.asset.department.includes(this.props.department)
          );
          this.setState({ wos: wosFiltered });
        } else {
          this.setState({ wos });
        }
      });
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch("/api/wos/delete/" + id, {
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
            <i className="fa fa-align-justify"></i> Work orders{" "}
            <small className="text-muted">list</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">WO Title</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Department</th>
                  <th scope="col">Assigned to</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.wos.map((wo) => (
                  <tr key={wo._id}>
                    <td>{wo.title}</td>
                    <Link to={`/home/Assets/${wo.asset._id}`}>
                      <td>{wo.asset.name}</td>
                    </Link>
                    <td>{wo.asset.department}</td>
                    <td>{wo.assigned_to.name}</td>
                    <td>
                      <Badge color={getBadge(wo.priority)}>{wo.priority}</Badge>
                    </td>
                    <td>
                      {isManager ? (
                        <React.Fragment>
                          <Button
                            className="float-right"
                            color="ghost-danger"
                            onClick={() => {
                              this.handleDelete(wo._id);
                            }}
                          >
                            <i className="icon-trash"></i>&nbsp;Delete
                          </Button>
                          <Button className="float-right" color="ghost-success">
                            <i className=" icon-pencil"></i>&nbsp;Edit
                          </Button>
                          <Link to={`/home/WOs/${wo._id}`}>
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
                          <Link to={`/home/WOs/${wo._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Details
                            </Button>
                          </Link>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Link
                            to={{
                              pathname: "/home/WOs/complete_wo",
                              id: wo._id,
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
                          <Link to={`/home/WOs/${wo._id}`}>
                            <Button
                              className="float-right"
                              color="ghost-primary"
                            >
                              <i className="icon-list"></i>
                              &nbsp;Details
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

export default connect(mapStateToProps, { login })(WOs);
