import { RouteConfig } from "./config";
import Console from "./pages/Console";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceList from "./pages/ServiceList";

const routeConfig: RouteConfig[] = [
	{
		path: '/',
		component: Console,
	},
	{
		path: '/service',
		component: ServiceList,
		children: [
			{
				path: '/detail',
				component: ServiceDetail
			},

		]
	}
]

export default routeConfig;