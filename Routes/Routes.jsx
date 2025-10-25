import { createBrowserRouter } from "react-router";
import HomeLayout from "../src/Layout/HomeLayout";
import HomePage from "../src/Pages/HomePage";
import Login from '../src/Login/Login'
import Registration from '../src/Registration/Registration'
import PrivateLayout from '../src/Layout/PrivateLayout'
import ToyDetails from '../src/ToyDetailes/ToyDetails'
import Alltoypage from "../src/Pages/Alltoypage";
import ToyPage from "../src/Pages/toyPage";
import Forgotpassword from "../src/ForgotPassword/Forgotpassword";
import Error from "../src/Error/Error";
import MyProfile from "../src/MyProfile/MyProfile";







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

            },
            {
                path: '/forgotpassword',
                element: <Forgotpassword></Forgotpassword>

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
        path: "/alltoy",
        element: <Alltoypage></Alltoypage>,
        children: [
            {
                path: ":name",
                Component: ToyPage,
                loader: () => fetch("/toy.json")
            },
        ]
    },
    {
        path: '/*',
        Component: Error

    }

]);


export default router; 