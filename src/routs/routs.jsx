import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import HomePage from "../pages/Home/HomePage";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";
import ServicesSection from "../pages/Home/ServicesSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
        {
            index: true,
            loader: () => fetch('/care.json'),            
            element: <HomePage/>
        },
        {
            path: '/details/:id',
            loader: () => fetch('/care.json'),
            element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>
        },
        {
            path: '/profile',
            element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
            path: '/profile-update',
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/forget-password',
            element: <ForgetPassword/>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: 'services',
            loader: () => fetch('/care.json'),
            element: <ServicesSection></ServicesSection>
        }
    ]
  },
]);