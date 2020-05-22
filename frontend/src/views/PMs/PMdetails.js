import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

class PMdetails extends Component {
  state = { pm: [], id: this.props.match.params.id };

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
    const { instructions } = this.state.pm;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>
              <i className="icon-info pr-1"></i>PM Title: {this.state.pm.title}{" "}
            </strong>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <tr>
                <td>
                  <strong>Instructions: </strong>
                </td>
                <td>
                  {instructions !== undefined
                    ? instructions.split("\\n").map((text) => {
                        return (
                          <span>
                            {text} <br />
                          </span>
                        );
                      })
                    : null}
                </td>
              </tr>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PMdetails;
