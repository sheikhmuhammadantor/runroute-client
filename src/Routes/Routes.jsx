import { createBrowserRouter } from "react-router-dom";
import { Home, Login, MainLayout } from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            }
        ]
    }
])
