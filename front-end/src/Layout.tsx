import { Route, Routes } from "react-router";
import routeConfig from './route';
import { RouteConfig } from './config';
import { extractRoutes } from "./utils";

const LayoutContainer = () => {
	return (
		<Routes>{
			extractRoutes(routeConfig).map((route: RouteConfig) => (
				<Route key={route.path} path={route.path} Component={route.component} />
			))}</Routes>
	)

}

export default LayoutContainer;