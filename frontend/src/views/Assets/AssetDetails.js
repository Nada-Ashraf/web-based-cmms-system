import React, { Component } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Info from "./Info";
// this.props.match.params.id
class Asset extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill("1"),
    };
  }

  lorem() {
    return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. ";
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {<Info id={this.props.match.params.id}></Info>}
        </TabPane>
        <TabPane tabId="2">{`2. ${this.lorem()}`}</TabPane>
        <TabPane tabId="3">{`3. ${this.lorem()}`}</TabPane>
      </>
    );
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "1"}
              onClick={() => {
                this.toggle(0, "1");
              }}
            >
              Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "2"}
              onClick={() => {
                this.toggle(0, "2");
              }}
            >
              Work orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "3"}
              onClick={() => {
                this.toggle(0, "3");
              }}
            >
              PMs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab[0]}>
          {this.tabPane()}
        </TabContent>
      </div>
    );
  }
}

export default Asset;
