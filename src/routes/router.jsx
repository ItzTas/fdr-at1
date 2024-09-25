import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home';
import UniqueHotel from '../pages/hotels/hotel_unique/hotel_unique';
import FasanoRio from '../pages/hotels/hotel_unique/fasano_rio';
import CopacabanaPalace from '../pages/hotels/hotel_unique/copacabana_palace';

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
        {
            path: '/hotels/Fasano+Rio',
            element: <FasanoRio />,
        },
        {
            path: '/hotels/Copacabana+Palace',
            element: <CopacabanaPalace />,
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}
