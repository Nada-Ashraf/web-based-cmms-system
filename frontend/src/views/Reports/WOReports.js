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

class WOReports extends Component {
  state = { wos: [] };

  componentDidMount() {
    fetch("/api/wos")
      .then((res) => res.json())
      .then((wos) => {
        const doneWOs = wos.filter(
          (wo) =>
            wo.status.includes("Done") || wo.status.includes("There's an issue")
        );
        // CHECK
        if (this.props.role === "Supervisor") {
          const wosFiltered = doneWOs.filter((wo) =>
            wo.asset.department.includes(this.props.department)
          );
          this.setState({ wos: wosFiltered });
        } else {
          this.setState({ wos: doneWOs });
        }
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Work order reports{" "}
            <small className="text-muted">list</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">WO title</th>
                  <th scope="col">Asset</th>
                  <th scope="col">Department</th>
                  {/* <th scope="col">Assigned to</th> */}
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
                    {/* <td>{wo.assigned_to.name}</td> */}
                    <td>
                      <Badge color={getBadge(wo.status)}>{wo.status}</Badge>
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/home/Reports/${wo._id}`,
                          id: wo._id,
                          status: wo.status,
                          endpoint: "/api/wos/",
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

export default connect(mapStateToProps, { login })(WOReports);
