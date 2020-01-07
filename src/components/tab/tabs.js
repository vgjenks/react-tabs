import React, { Component } from "react";
import PropTypes from "prop-types";

import { TabContext } from "./tab_context";

class Tabs extends Component {
    render() {
        let contextValue = {
            boundTabs: this.props.bind,
        };
        return (
            <TabContext.Provider value={contextValue}>
                {this.props.children}
            </TabContext.Provider>
        );
    }
}

Tabs.propTypes = {
    bind: PropTypes.array.isRequired
};

export default Tabs;
