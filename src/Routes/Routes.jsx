import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    }
])
