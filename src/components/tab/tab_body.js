import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import { TabContext } from "./tab_context";

class TabBody extends Component {
    static contextType = TabContext;
    
    render() {
        let { boundTabs } = this.context;
        let { pathname } = window.location;
        let activeTab = boundTabs.filter(t => t.path === pathname)[0];
        if (!activeTab) return null;
        return <Route path={pathname} component={activeTab.component} />;
    }
}

export default withRouter(TabBody);
