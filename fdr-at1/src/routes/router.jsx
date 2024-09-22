import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home';

export default function Router() {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}
