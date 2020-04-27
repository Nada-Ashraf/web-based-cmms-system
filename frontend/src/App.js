import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { assets: [] };

  componentDidMount() {
    fetch("/api/assets")
      .then((res) => res.json())
      .then((assets) => this.setState({ assets }));
  }

  render() {
    return (
      <div className="App">
        <h1>assets</h1>
        {this.state.assets.map((asset) => (
          <div key={asset.serial_number}>{asset.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
