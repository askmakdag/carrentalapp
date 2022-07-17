import Dashboard from "../pages/Dashboard";
import CarDetails from "../pages/CarDetails";
import Layout from "../pages/layout";


export interface routeElement {
    index?: boolean,
    name?: string,
    path?: string,
    element: JSX.Element,
    children?: routeElement[]
}

const routes: routeElement[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: '/detail/:id',
                element: <CarDetails />
            }
        ]
    }
];

export default routes;
