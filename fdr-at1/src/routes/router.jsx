import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home';
import UniqueHotel from '../pages/hotels/hotel_unique/hotel_unique';

export default function Router() {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/hotels/Hotel+Unique',
            element: <UniqueHotel />,
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}
