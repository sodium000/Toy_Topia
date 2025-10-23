import { createBrowserRouter } from "react-router";
import HomeLayout from "../src/Layout/HomeLayout";
import HomePage from "../src/Pages/HomePage";
import Login from '../src/Login/Login'
import Registration from '../src/Registration/Registration'



const router = createBrowserRouter([
    { path: "/", 
    Component: HomeLayout,
    children : [
        {
            path : "",
            Component : HomePage
        },
        {
            path : "/login",
            Component : Login
        },
        {
            path : "/registration",
            Component : Registration 
        }
    ]
    },
    { 
        path : '/about',
        element : <div>this is about</div>

    },
]);


export default router; 