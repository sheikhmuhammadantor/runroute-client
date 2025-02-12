import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ErrorPage() {
    return (
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <Helmet>
                <title>Oops | Error Happen</title>
            </Helmet>
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-teal-500 px-2 text-sm rounded rotate-12 absolute text-white">
                Page Not Found
            </div>
            <button class="mt-5">
                <Link to="/" class="relative inline-block text-sm font-medium text-teal-500 group active:text-teal-500 focus:outline-none focus:ring">
                    <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-teal-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <p>Go Home</p>
                    </span>
                </Link>
            </button>
        </main>
    )
}

export default ErrorPage
