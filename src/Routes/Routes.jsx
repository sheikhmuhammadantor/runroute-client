import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout } from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

        ]
    }
])
