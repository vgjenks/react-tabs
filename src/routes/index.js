import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TabbedComponent from "../components/tabbed_component";

export default (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/tabs" component={TabbedComponent} />
			</Switch>
		</div>
	</BrowserRouter>
);