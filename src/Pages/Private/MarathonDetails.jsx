import { Link, useParams } from "react-router-dom";
import { useAxios } from "../../App";
import { useEffect, useState } from "react";

function MarathonDetails() {

  const { id } = useParams();
  const [marathon, setMarathon] = useState({});
  const axiosInstance = useAxios();
  // Destructuring all data from the marathon object
  console.log(marathon);
  const { _id, title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image, createdAt, totalRegistrations } = marathon || {};

  function formatDate(dateStr) {
    return new Date(dateStr)
      .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  useEffect(() => {
    axiosInstance.get(`/marathons/${id}`)
      .then(res => setMarathon(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="px-2">
      <div className="card card-compact bg-base-100 max-w-[800px] mx-auto my-12 shadow-xl border md:flex-row p-3 sm:p-5">
        <figure>
          <img className="rounded-xl" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{title}</h2>
          <div className='flex items-center justify-start gap-3'>
            <p className="badge badge-success text-white p-3">{runningDistance}m.</p>
            <p><b>On.</b> {formatDate(marathonStartDate)}</p>
          </div>
          <p><b>Reg. Start:</b> {formatDate(registrationStartDate)}</p>
          <p><b>Reg. End:</b> {formatDate(registrationEndDate)}</p>
          <p><b>Marathon Create:</b> {formatDate(createdAt)}</p>
          <p>{description}</p>
          <p className="underline">{location}</p>
          <div>
            <span><b>Reg. Start:</b></span>
            <p className="badge bg-black border-transparent text-white p-3 ml-2">{totalRegistrations}</p>
          </div>
          <div className="card-actions justify-center mt-4">
            <Link to="/registration/:id" className="btn btn-sm btn-accent text-lg px-8 disabled:btn-info disabled:opacity-60 disabled:cursor-none">Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarathonDetails
