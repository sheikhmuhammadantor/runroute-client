import { createBrowserRouter } from "react-router-dom";
import { AddMarathon, AllMarathons, Dashboard, ErrorPage, Home, Login, MainLayout, MarathonDetails, MyApplyList, MyMarathonsList, PrivateRoutes, Register, Registration } from "../App";

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
                path: "/dashboard",
                element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
                children: [
                    {
                        path: "/dashboard/addMarathon",
                        element: <PrivateRoutes><AddMarathon /></PrivateRoutes>,
                    },
                    {
                        path: "myMarathons",
                        element: <PrivateRoutes><MyMarathonsList /></PrivateRoutes>,
                    },
                    {
                        path: "myApplies",
                        element: <PrivateRoutes><MyApplyList /></PrivateRoutes>,
                    },
                ]
            },
            {
                path: "/marathons",
                element: <PrivateRoutes><AllMarathons /></PrivateRoutes>,
            },
            {
                path: "/marathons/:id",
                element: <PrivateRoutes><MarathonDetails /></PrivateRoutes>,
            },
            {
                path: "/registration/:id",
                element: <PrivateRoutes><Registration /></PrivateRoutes>,
            },
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
