import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/index";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Index />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
