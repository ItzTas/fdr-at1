import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
    const routes = [
        {
            path: '/',
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}
