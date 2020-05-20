import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Footer extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a href="http://bmes.cufe.edu.eg/"> SBME</a> Students project
        </span>
        <span className="ml-auto">
          Check our{" "}
          <a href="https://github.com/nada-Ashraf/web-based-cmms-system">
            Github Repo
          </a>
        </span>
      </React.Fragment>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
