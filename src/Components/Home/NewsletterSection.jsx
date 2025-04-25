import toast from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";

export default function NewsletterSection() {
    return (
        <section className="w-full bg-base-200 py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="flex justify-center items-center gap-2">
                    <FaEnvelope className="text-primary text-3xl" />
                    <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
                </div>
                <p className="text-base-content text-sm md:text-base">
                    Stay updated with the latest marathons, tips, and exclusive RunRoute insights.
                </p>
                <form className="flex flex-col md:flex-row items-center gap-4 justify-center" onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("Subscribed successfully!");
                    e.target.reset();
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full max-w-sm"
                    />
                    <button type="submit" className="btn btn-primary">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}