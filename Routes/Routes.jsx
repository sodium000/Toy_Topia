import { createBrowserRouter } from "react-router";
import HomeLayout from "../src/Layout/HomeLayout";
import HomePage from "../src/Pages/HomePage";
import Login from '../src/Login/Login'
import Registration from '../src/Registration/Registration'
import PrivateLayout from '../src/Layout/PrivateLayout'
import MyProfile from "../src/Myprofile/MyProfile";
import ToyDetails from '../src/ToyDetailes/ToyDetails'






const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "",
                Component: HomePage
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/registration",
                Component: Registration
            }
        ]
    },
    {
        path: '/about',
        element: <div>this is about</div>

    },
    {
        path: '/myprofile',
        element: <PrivateLayout><MyProfile></MyProfile></PrivateLayout>

    },
    {
        path: "/toydetails/:id",
        element: <PrivateLayout><ToyDetails></ToyDetails></PrivateLayout>,
        loader: () => fetch("/toy.json"),
      
    },
    {
        path: '/*',
        element: <h1>this is error</h1>

    }

]);


export default router; 