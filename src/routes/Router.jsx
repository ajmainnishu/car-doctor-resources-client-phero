import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Service from "../pages/Service/Service/Service";
import CheckOut from "../pages/CheckOut/CheckOut/CheckOut";
import AddNewService from "../pages/AddNewService/AddNewService/AddNewService";
import Appointment from "../layout/Appoinment/Appointment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: 'services/:id',
                element: <Service></Service>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout',
                element: <CheckOut />
            },
            {
                path: '/add-new-service',
                element: <AddNewService />
            }
        ]
    },
    {
        path: 'appointment',
        element: <Appointment />
    }
])

export default router;