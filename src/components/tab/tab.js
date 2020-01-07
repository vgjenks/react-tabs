import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Tab extends Component {
    onClick = tab => () => {
        let { onClick } = this.props;
        if (onClick) {
            onClick(tab);
        }
    }

    getLinkStyles() {
        let { pathname } = window.location;
        if (this.props.to === pathname) {
            return "nav-link active";
        } else {
            return "nav-link";
        }
    }

    render() {
        let { to } = this.props;
        return (
            <li className="nav-item">
                <Link className={this.getLinkStyles()} to={to} onClick={this.onClick(this)}>
                    {this.props.title}
                </Link>
            </li>
        );
    }
}

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Tab;
