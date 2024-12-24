import { NavLink, Outlet } from "react-router-dom"
import Aside from "../Components/Dashboard/Aside"

function Dashboard() {
    return (
        <section className="grid grid-cols-12 gap-4 mb-12 items-start">
            <Aside />
            <section className="col-span-12 lg:col-span-10">
                <Outlet />
            </section>
        </section>
    )
}

export default Dashboard
