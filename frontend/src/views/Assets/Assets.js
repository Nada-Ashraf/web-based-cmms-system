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

class Assets extends Component {
  state = { assets: [] };

  componentDidMount() {
    fetch("/api/assets")
      .then((res) => res.json())
      // .then((assets) => )
      .then((assets) => {
        const assetsFiltered = assets.filter((asset) =>
          asset.department.includes(this.props.department)
        );
        this.setState({ assets: assetsFiltered });
      });
  }

  handleDelete = (assetId) => {
    // Note: I'm using arrow functions inside the `.fetch()` method.
    // This makes it so you don't have to bind component functions like `setState`
    // to the component.
    fetch("/api/assets/delete/" + assetId, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  render() {
    let add_assets_button;
    let actions_buttons;
    if (this.props.role === "Manager") {
      add_assets_button = (
        <Link to="/home/Assets/add_asset">
          <Button className="float-right" color="primary">
            <i className="icon-plus"></i>
            &nbsp;Add Asset
          </Button>
        </Link>
      );
      actions_buttons = this.state.assets.map((asset) => (
        <td>
          <Button
            className="float-right"
            color="ghost-danger"
            onClick={() => {
              this.handleDelete(asset._id);
            }}
          >
            <i className="icon-trash"></i>&nbsp;Delete
          </Button>
          <Button className="float-right" color="ghost-success">
            <i className=" icon-pencil"></i>&nbsp;Edit
          </Button>
          <Link to={`/Assets/${asset._id}`}>
            <Button className="float-right" color="ghost-primary">
              <i className="icon-list"></i>
              &nbsp;Details
            </Button>
          </Link>
        </td>
      ));
    } else {
      add_assets_button = <div></div>;
      actions_buttons = <div></div>;
    }
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Assets{" "}
            <small className="text-muted">list</small>
            {/* <Link to="/Assets/add_asset">
              <Button className="float-right" color="primary">
                <i className="icon-plus"></i>
                &nbsp;Add Asset
              </Button>
            </Link> */}
            {add_assets_button}
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Model</th>
                  <th scope="col">Serial Number</th>
                  <th scope="col">Department</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.assets.map((asset) => (
                  <tr key={asset.serial_number}>
                    <td>
                      {/* <Link to={`/assets/${asset._id}`}>{asset.name}</Link> */}
                      {asset.name}
                    </td>
                    <td>{asset.model}</td>
                    <td>{asset.serial_number}</td>
                    <td>{asset.department}</td>
                    <td>
                      <Badge color={getBadge(asset.condition)}>
                        {asset.condition}
                      </Badge>
                    </td>
                    {/* <td>
                      <Button
                        className="float-right"
                        color="ghost-danger"
                        onClick={() => {
                          this.handleDelete(asset._id);
                        }}
                      >
                        <i className="icon-trash"></i>&nbsp;Delete
                      </Button>
                      <Button className="float-right" color="ghost-success">
                        <i className=" icon-pencil"></i>&nbsp;Edit
                      </Button>
                      <Link to={`/Assets/${asset._id}`}>
                        <Button className="float-right" color="ghost-primary">
                          <i className="icon-list"></i>
                          &nbsp;Details
                        </Button>
                      </Link>
                    </td> */}
                    {actions_buttons}
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

export default connect(mapStateToProps, { login })(Assets);
