import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Service from "../pages/Service/Service/Service";
import CheckOut from "../pages/CheckOut/CheckOut/CheckOut";
import AddNewService from "../pages/AddNewService/AddNewService/AddNewService";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Appointment from "../layout/Appoinment/Appointment";
import OrderReview from "../pages/OrderReview/OrderReview/OrderReview";
import ManageInventory from "../pages/ManageInventory/ManageInventory.jsx/ManageInventory";

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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/add-new-service',
                element: <PrivateRoute><AddNewService /></PrivateRoute>
            }
        ]
    },
    {
        path: 'appointment',
        element: <Appointment />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'order-review',
                element: <OrderReview />
            },
            {
                path: 'manage-inventory',
                element: <ManageInventory />
            }
        ]
    }
])

export default router;