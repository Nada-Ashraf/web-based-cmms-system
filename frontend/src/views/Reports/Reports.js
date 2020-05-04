import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";

class Reports extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Reports Table
        </CardHeader>
        <CardBody>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yiorgos Avraamu</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Active</Badge>
                </td>
              </tr>
              <tr>
                <td>Avram Tarasios</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="danger">Banned</Badge>
                </td>
              </tr>
              <tr>
                <td>Quintin Ed</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="secondary">Inactive</Badge>
                </td>
              </tr>
              <tr>
                <td>Enéas Kwadwo</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="warning">Pending</Badge>
                </td>
              </tr>
              <tr>
                <td>Agapetus Tadeáš</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Active</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <PaginationItem disabled>
              <PaginationLink previous tag="button">
                Prev
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button">
                Next
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    );
  }
}

export default Reports;
