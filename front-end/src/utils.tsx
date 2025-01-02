import { RouteConfig } from "./config";

export const extractRoutes = (ary: RouteConfig[]) => {
	const result: RouteConfig[] = [];
	const traverse = (routeList: RouteConfig[]) => {
		for (const route of routeList) {
			const { path, component, children } = route;
			result.push({ path, component });
			if (children && Array.isArray(children)) {
				const pathChildren = children.map((item) => { return Object.assign({}, item, { path: path + item.path }) })
				traverse(pathChildren)
			}
		}
	}

	traverse(ary);
	return result;
}

export const noUsedFunc = () => {
	console.log('noUsed');
}
export const noUsedFunc1 = () => {
	console.log('noUsed');
}
export const noUsedFunc2 = () => {
	console.log('noUsed');
}
export const noUsedFunc3 = () => {
	console.log('noUsed');
}
