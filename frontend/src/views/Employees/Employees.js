import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Card, CardBody, CardHeader, Table } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

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

class Employees extends Component {
  state = { employees: [] };

  componentDidMount() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((employees) => {
        if (this.props.role === "Supervisor") {
          const employeesFiltered = employees.filter((employee) =>
            employee.department.includes(this.props.department)
          );
          this.setState({ employees: employeesFiltered });
        } else {
          this.setState({ employees });
        }
      });
  }

  // handleDelete = (assetId) => {
  //   fetch("/api/assets/delete/" + assetId, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(() => {
  //       window.location.reload(false);
  //     });
  // };

  render() {
    const isManager = this.props.role === "Manager";
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Employees
            {isManager ? (
              <Link to="/home/Employees/add_employee">
                <Button className="float-right" color="primary">
                  <i className="icon-plus"></i>
                  &nbsp;Add Employee
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email</th>
                  <th scope="col">Department</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>
                      {isManager ? (
                        <React.Fragment>
                          <Button
                            className="float-right"
                            color="ghost-danger"
                            onClick={() => {
                              this.handleDelete(employee._id);
                            }}
                          >
                            <i className="icon-trash"></i>&nbsp;Delete
                          </Button>
                          {/* <Link
                            to={{
                              pathname: "/home/Employees/edit_employee",
                              id: employee._id,
                            }}
                          > */}
                          <Button className="float-right" color="ghost-success">
                            <i className=" icon-pencil"></i>&nbsp;Edit
                          </Button>
                          {/* </Link> */}
                          {/* <Link to={`/Employees/${asset._id}`}> */}
                          <Button className="float-right" color="ghost-primary">
                            <i className="icon-list"></i>
                            &nbsp;Details
                          </Button>
                          {/* </Link> */}
                        </React.Fragment>
                      ) : (
                        // <Link to={`/Employees/${asset._id}`}>
                        <Button className="float-right" color="ghost-primary">
                          <i className="icon-list"></i>
                          &nbsp;Details
                        </Button>
                        // </Link>
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
});

export default connect(mapStateToProps, { login })(Employees);
