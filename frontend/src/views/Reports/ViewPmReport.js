import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

class ViewPmReport extends Component {
  state = { pm: {}, id: this.props.match.params.id };

  componentDidMount() {
    fetch("/api/pms/" + this.state.id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((pm) => {
        this.setState({ pm });
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>
              <i className="icon-info pr-1"></i>Report Title:{" "}
              {this.state.pm.report_title}{" "}
            </strong>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <tr>
                {/* <td>
                  <strong>Instructions: </strong>
                </td> */}
                <td>{this.state.pm.report_body}</td>
              </tr>
            </Table>
          </CardBody>
          <CardFooter>
            <Link
              to={{
                pathname: "/home/WOs/Add_WO",
                // asset_id: this.state.pm.asset._id,
              }}
            >
              <Button className="float-right" color="primary">
                Start Work order
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default ViewPmReport;