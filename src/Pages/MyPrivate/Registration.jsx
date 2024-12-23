import { useEffect, useState } from 'react';
import { useAuth, useAxios } from '../../App'
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

function Registration() {

    const { id } = useParams();
    const [marathon, setMarathon] = useState({});
    const axiosInstance = useAxios();
    const { user: { email } = {} } = useAuth();

    useEffect(() => {
        axiosInstance.get(`/marathons/${id}`)
            .then(res => setMarathon(res.data))
            .catch(err => console.log(err))
    }, [])

    const { _id, title, marathonStartDate, totalRegistrations } = marathon || {};

    const formattedStartDate = marathonStartDate ? new Date(marathonStartDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }) : '';

    const marathonDate = {
        marathonId: _id,
        title,
        marathonStartDate,
        totalRegistrations
    }

    const handelRegisterMarathon = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const contact = form.contact.value;
        const newRegistration = { ...marathonDate, firstName, lastName, email, contact };

        axiosInstance.post(`/registration/:${_id}`, newRegistration)
            .then((data) => {
                console.log(data.data);
                // axiosInstance.put(`/registrationsIncrement/:${_id}`)
                //     .then((data) => {
                //         console.log(data.data);
                //     })
                //     .catch(err => console.log(err))
            })
    }

    return (
        <section className="my-12">
            <div className="my-6 ml-8">
                <Link to="/" className="flex items-center gap-2 text-xl font-semibold outline outline-1 w-max py-1 px-3 rounded-full cursor-pointer hover:outline-2 hover:shadow-xl"><FaArrowLeft /> Back to home</Link>
            </div>
            <div>
                <div className="bg-base-200 w-full shadow-2xl border rounded-2xl py-6">
                    <div className="text-center px-4">
                        <h2 className="text-3xl font-semibold mb-3">Register Marathon</h2>
                        {/* <p className="">Bring your idea to life! Share your vision, set goals, and inspire others to support you. <br /> Fill in the form below to begin your journey toward making a difference.</p> */}
                    </div>
                    {/* From Start Her - */}
                    <form onSubmit={handelRegisterMarathon} className="card-body ">
                        {/* Marathon Title - Read Only  */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={title} className="input input-bordered" required readOnly />
                            </div>
                            {/* Date - Read Only */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <DatePicker
                                    selected={formattedStartDate}
                                    className='input input-bordered disabled:text-black'
                                    dateFormat="dd MMM yyyy"
                                    disabled
                                />
                            </div>
                        </div>
                        {/* Name */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Email (Read Only/ user can't edit this field) */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={email} readOnly className="input input-bordered" required />
                            </div>
                            {/* Confect Number */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="number" name="contact" placeholder="Number" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Add Button */}
                        <div className="mt-8 mx-8 text-center">
                            <button className="btn btn-accent text-lg text-white outline-2 outline outline-black outline-offset-0 w-full">Add New Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Registration
