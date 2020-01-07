import React, { Component, Suspense } from "react";

import Tabs from "./tab/tabs";
import TabList from "./tab/tab_list";
import Tab from "./tab/tab";
import TabBody from "./tab/tab_body";

const TabBody1 = React.lazy(() => import("./tab_body_1"));
const TabBody2 = React.lazy(() => import("./tab_body_2"));
const TabBody3 = React.lazy(() => import("./tab_body_3"));
const TabBody4 = React.lazy(() => import("./tab_body_4"));

class TabbedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                path: "/tabs/nested-sub-route1",
                component: TabBody1
            },
            {
                path: "/tabs/nested-sub-route2",
                component: TabBody2
            },
            {
                path: "/tabs/nested-sub-route3",
                component: TabBody3
            },
            {
                path: "/tabs/nested-sub-route4",
                component: TabBody4
            }]
        };
    }

    onTabClick = tab =>  {
        console.log("This is optional, but you clicked tab:", tab);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Tabs Example</h1>
                </div>
                <div>
                    <Suspense fallback={<h2>LOADING...</h2>}>
                        <Tabs bind={this.state.tabs}>
                            <TabList>
                                <Tab title="Tab 1" onClick={this.onTabClick} />
                                <Tab title="Tab 2" onClick={this.onTabClick} />
                                <Tab title="Tab 3" />
                                <Tab title="Tab 4" />
                            </TabList>
                            <div>
                                <TabBody />
                            </div>
                        </Tabs>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default TabbedComponent;
