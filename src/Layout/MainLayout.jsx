import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Toaster } from "react-hot-toast"

function MainLayout() {
    return (
        <>
            <Toaster position="bottom-center" reverseOrder={true} />
            <section className="mt-2">
                <Navbar />
            </section>
            <section className="px-5 mt-32 min-h-[65vh] ">
                <Outlet />
            </section>
            <section className="bg-base-200 text-base-content">
                <Footer />
            </section>
        </>
    )
}

export default MainLayout
