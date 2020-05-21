import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import moment from "moment";

class AssetDetails extends Component {
  state = { info: [] };

  componentDidMount() {
    fetch("/api/assets/" + this.props.match.params.id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((info) => this.setState({ info }));
  }
  render() {
    const { work_env, sterilization, alarms } = this.state.info;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>
              <i className="icon-info pr-1"></i>Asset Name:{" "}
              {this.state.info.name}{" "}
            </strong>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <tr>
                <td>
                  <strong>Description: </strong>
                </td>
                <td>{this.state.info.description}</td>
              </tr>
              <tr>
                <td>
                  <strong>Classification: </strong>
                </td>
                <td>{this.state.info.classification}</td>
              </tr>
              <tr>
                <td>
                  <strong>Classification: </strong>
                </td>
                <td>
                  {alarms !== undefined
                    ? alarms.split("\\n").map((text) => {
                        return (
                          <span>
                            {text} <br />
                          </span>
                        );
                      })
                    : null}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Serial number: </strong>
                </td>
                <td>{this.state.info.serial_number}</td>
              </tr>
              <tr>
                <td>
                  <strong>Model: </strong>
                </td>
                <td>{this.state.info.model}</td>
              </tr>
              <tr>
                <td>
                  <strong>Brand: </strong>
                </td>
                <td>{this.state.info.brand}</td>
              </tr>
              <tr>
                <td>
                  <strong>Department: </strong>
                </td>
                <td>{this.state.info.department}</td>
              </tr>
              <tr>
                <td>
                  <strong>Country of origin: </strong>
                </td>
                <td>{this.state.info.COO}</td>
              </tr>
              <tr>
                <td>
                  <strong>Supply date: </strong>
                </td>
                <td>
                  {moment(this.state.info.supply_date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Operation date: </strong>
                </td>
                <td>
                  {moment(this.state.info.operation_date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Warranty period: </strong>
                </td>
                <td>{this.state.info.warranty_period}</td>
              </tr>
              <tr>
                <td>
                  <strong>Purchase price: </strong>
                </td>
                <td>{this.state.info.price}</td>
              </tr>
              <tr>
                <td>
                  <strong>Maintenance company: </strong>
                </td>
                <td>{this.state.info.maintenance_company}</td>
              </tr>
              <tr>
                <td>
                  <strong>Contract type: </strong>
                </td>
                <td>{this.state.info.contract_type}</td>
              </tr>
              <tr>
                <td>
                  <strong>Contract start date: </strong>
                </td>
                <td>
                  {" "}
                  {moment(this.state.info.conract_start_date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Contract end date: </strong>
                </td>
                <td>
                  {moment(this.state.info.conract_end_date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Status: </strong>
                </td>
                <td>{this.state.info.status}</td>
              </tr>
              <tr>
                <td>
                  <strong>Notes: </strong>
                </td>
                <td>{this.state.info.notes}</td>
              </tr>
              <tr>
                <td>
                  <strong>Lifetime: </strong>
                </td>
                <td>{this.state.info.lifetime}</td>
              </tr>
              <tr>
                <td>
                  <strong>Proper freq of use: </strong>
                </td>
                <td>{this.state.info.proper_freq_of_use}</td>
              </tr>
              <tr>
                <td>
                  <strong>Electricity sensitivity: </strong>
                </td>
                <td>{this.state.info.electricity_sensitivity}</td>
              </tr>
              <tr>
                <td>
                  <strong>Risk level: </strong>
                </td>
                <td>{this.state.info.risk_level}</td>
              </tr>
              <tr>
                <td>
                  <strong>Work environment: </strong>
                </td>
                <td>
                  {work_env !== undefined
                    ? work_env.split("\\n").map((text) => {
                        return (
                          <span>
                            {text} <br />
                          </span>
                        );
                      })
                    : null}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Efficiency: </strong>
                </td>
                <td>{this.state.info.efficiency}</td>
              </tr>
              <tr>
                <td>
                  <strong>Sterilization: </strong>
                </td>
                <td>
                  {sterilization !== undefined
                    ? sterilization.split("\\n").map((text) => {
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

export default AssetDetails;

// {this.state.info.map((element) => (
//   <tr key={element}>
//     <td>
//       <strong>Instructions: </strong>
//     </td>
//     <td>{element}</td>
//   </tr>
// ))}
