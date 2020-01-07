import React, { Component } from "react";

import { TabContext } from "./tab_context";

class TabList extends Component {
    static contextType = TabContext;

    render() {
        let { boundTabs } = this.context;
        let { children } = this.props;
        return (
            <ul className="nav nav-tabs">
                {
                    React.Children.map(children, (child, i) => {
                        let tab = boundTabs[i];
                        return React.cloneElement(child, {
                            to: tab.path
                        })
                    })
                }
            </ul>
        );
    }
}

export default TabList;
