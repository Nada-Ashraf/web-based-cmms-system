import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class Employees extends Component {
  state = { employees: [] };

  componentDidMount() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((employees) => {
        employees = employees.filter(
          (employee) =>
            employee.role.includes("Technician") ||
            employee.role.includes("Supervisor")
        );
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

  handleDelete = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch("/api/users/delete/" + employeeId, {
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
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Employees List
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
                    <td>{employee._id}</td>
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
                          >
                          <Button className="float-right" color="ghost-success">
                            <i className=" icon-pencil"></i>&nbsp;Edit
                          </Button>
                          </Link> */}
                        </React.Fragment>
                      ) : (
                        <React.Fragment></React.Fragment>
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
