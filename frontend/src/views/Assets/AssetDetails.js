import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

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
                  <strong>description: </strong>
                </td>
                <td>{this.state.info.description}</td>
              </tr>
              <tr>
                <td>
                  <strong>classification: </strong>
                </td>
                <td>{this.state.info.classification}</td>
              </tr>
              <tr>
                <td>
                  <strong>serial_number: </strong>
                </td>
                <td>{this.state.info.serial_number}</td>
              </tr>
              <tr>
                <td>
                  <strong>model: </strong>
                </td>
                <td>{this.state.info.model}</td>
              </tr>
              <tr>
                <td>
                  <strong>brand: </strong>
                </td>
                <td>{this.state.info.brand}</td>
              </tr>
              <tr>
                <td>
                  <strong>department: </strong>
                </td>
                <td>{this.state.info.department}</td>
              </tr>
              <tr>
                <td>
                  <strong>COO: </strong>
                </td>
                <td>{this.state.info.COO}</td>
              </tr>
              <tr>
                <td>
                  <strong>supply_date: </strong>
                </td>
                <td>{this.state.info.supply_date}</td>
              </tr>
              <tr>
                <td>
                  <strong>operation_date: </strong>
                </td>
                <td>{this.state.info.operation_date}</td>
              </tr>
              <tr>
                <td>
                  <strong>warranty_period: </strong>
                </td>
                <td>{this.state.info.warranty_period}</td>
              </tr>
              <tr>
                <td>
                  <strong>price: </strong>
                </td>
                <td>{this.state.info.price}</td>
              </tr>
              <tr>
                <td>
                  <strong>maintenance_company: </strong>
                </td>
                <td>{this.state.info.maintenance_company}</td>
              </tr>
              <tr>
                <td>
                  <strong>contract_type: </strong>
                </td>
                <td>{this.state.info.contract_type}</td>
              </tr>
              <tr>
                <td>
                  <strong>contract_start_date: </strong>
                </td>
                <td>{this.state.info.contract_start_date}</td>
              </tr>
              <tr>
                <td>
                  <strong>contract_end_date: </strong>
                </td>
                <td>{this.state.info.contract_end_date}</td>
              </tr>
              {/* <tr>
                <td>
                  <strong>recieved_by: </strong>
                </td>
                <td>{this.state.info.recieved_by.name}</td>
              </tr> */}
              <tr>
                <td>
                  <strong>condition: </strong>
                </td>
                <td>{this.state.info.condition}</td>
              </tr>
              <tr>
                <td>
                  <strong>notes: </strong>
                </td>
                <td>{this.state.info.notes}</td>
              </tr>
              <tr>
                <td>
                  <strong>lifetime: </strong>
                </td>
                <td>{this.state.info.lifetime}</td>
              </tr>
              <tr>
                <td>
                  <strong>proper_freq_of_use: </strong>
                </td>
                <td>{this.state.info.proper_freq_of_use}</td>
              </tr>
              <tr>
                <td>
                  <strong>electricity_sensitivity: </strong>
                </td>
                <td>{this.state.info.electricity_sensitivity}</td>
              </tr>
              <tr>
                <td>
                  <strong>risk_level: </strong>
                </td>
                <td>{this.state.info.risk_level}</td>
              </tr>
              <tr>
                <td>
                  <strong>work_env: </strong>
                </td>
                <td>{this.state.info.work_env}</td>
              </tr>
              <tr>
                <td>
                  <strong>efficiency: </strong>
                </td>
                <td>{this.state.info.efficiency}</td>
              </tr>
              <tr>
                <td>
                  <strong>sterilization: </strong>
                </td>
                <td>{this.state.info.sterilization}</td>
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
