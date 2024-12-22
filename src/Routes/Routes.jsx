import { createBrowserRouter } from "react-router-dom";
import { AddMarathon, ErrorPage, Home, Login, MainLayout, Register } from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addMarathon",
                element: <AddMarathon />,
            },
            {},
            {},
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            }
        ]
    }
])
