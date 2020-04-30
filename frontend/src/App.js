import React, { Component } from "react";
import "./App.css";
// import "coreui/dist/css/coreui.min.css";

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

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <body class="app sidebar-show aside-menu-show">
//         <header class="app-header navbar">Hello world </header>
//         <div class="app-body">
//           <div class="sidebar">Hello world </div>
//           <main class="main">Hello world </main>
//           <aside class="aside-menu">Hello world </aside>
//         </div>
//         <footer class="app-footer">Hello world </footer>
//       </body>
//     );
//   }
// }

// export default App;
