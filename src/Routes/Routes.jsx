import { createBrowserRouter } from "react-router-dom";
import { AddMarathon, AllMarathons, Dashboard, ErrorPage, Home, Login, MainLayout, MarathonDetails, MyApplyList, MyMarathonsList, Register } from "../App";

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
                element: <Dashboard />,
                children: [
                    {
                        path: "addMarathon",
                        element: <AddMarathon />,
                    },
                    {
                        path: "myMarathons",
                        element: <MyMarathonsList />,
                    },
                    {
                        path: "myApplies",
                        element: <MyApplyList />,
                    },
                ]
            },
            {
                path: "/marathons",
                element: <AllMarathons />,
            },
            {
                path: "/marathons/:id",
                element: <MarathonDetails />,
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
