import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

class Assets extends Component {
  state = { assets: [] };

  componentDidMount() {
    fetch("/api/assets")
      .then((res) => res.json())
      .then((assets) => this.setState({ assets }));
  }

  render() {
    // const userList = usersData.filter((user) => user.id < 10);
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Assets{" "}
            <small className="text-muted">list</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">registered</th>
                  <th scope="col">role</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map((asset) => (
                  <tr key={asset.serial_number}>
                    <td>{asset.name}</td>
                    <td>{asset.serial_number}</td>
                    <td>{asset.price}</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
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

export default Assets;
