import Dashboard from "../pages/Dashboard";
import CarDetails from "../pages/CarDetails";
import Layout from "../pages/layout";
import PageNotFound from "../pages/page-not-found";


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
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    }
];

export default routes;
