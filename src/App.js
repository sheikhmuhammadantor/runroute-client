import Banner from "./Components/Home/Banner";
import Marathons from "./Components/Home/Marathons";
import UpcomingMarathons from "./Components/Home/UpcomingMarathons";
import useAxios from "./Hook/useAxios";
import useAuth from "./Hook/useAuth";
import MainLayout from "./Layout/MainLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import AddMarathon from "./Pages/Private/AddMarathon";
import AllMarathons from "./Pages/Private/AllMarathons";
import MarathonDetails from "./Pages/Private/MarathonDetails";
import MyMarathonsList from "./Pages/MyPrivate/MyMarathonsList";
import MyApplyList from "./Pages/MyPrivate/MyApplyList";
import PrivateRoutes from "./Routes/PrivateRoutes";

export { MainLayout, Home, Marathons, Banner, UpcomingMarathons, useAuth , Login, Register, ErrorPage,Dashboard , AddMarathon, useAxios, AllMarathons, MarathonDetails, MyMarathonsList, MyApplyList, PrivateRoutes };
