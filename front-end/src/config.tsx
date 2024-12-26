export interface RouteConfig {
    path: string,
    component: any,
    children?: RouteConfig[]
}