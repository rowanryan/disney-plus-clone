import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">{props.children}</div>
		</>
	);
}

export default Layout;
