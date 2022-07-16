import Dashboard from "../pages/Dashboard";
import CarDetails from "../pages/CarDetails";


export interface routeElement {
    name?: string,
    path: string,
    element: JSX.Element,
}

const routes: routeElement[] = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/detail/:id',
        element: <CarDetails />
    }
];

export default routes;
