import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { CartPage, ItemListContainer, ItemDetailContainer } from '../pages';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer />
    },
    {
        path: '/item/:idProduct',
        element: <ItemDetailContainer />
    },
    {
        path: '/category/:id',
        element: <ItemListContainer />
    },
    {
        path:'/cart',
        element: <CartPage />
    }
])

const Navigation = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default Navigation;