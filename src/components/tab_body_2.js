import React, { Component } from "react";
import { Link } from "react-router-dom";

class TabBody2 extends Component {
	render() {
		return (
			<div>
				<div>
					<h3>Tab Body 2</h3>
				</div>
				<div>
					Independent tab body!
				</div>
				<div>
					<Link to="/tabs">Back to top</Link>
				</div>
			</div>
		);
	}
}

export default TabBody2;
