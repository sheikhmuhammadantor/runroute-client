import { Link } from 'react-router-dom';

function DataCard({ marathon }) {

    const { _id, title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image } = marathon;
    // console.log(_id)

    function formatDate(dateStr) {
        return new Date(dateStr)
            .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    return (
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <div className='flex items-center justify-start gap-3'>
                    <p className="badge badge-success text-white p-3">{runningDistance}m.</p>
                    <p><b>On.</b> {formatDate(marathonStartDate)}</p>
                </div>
                <p><b>Reg. Start:</b> {formatDate(registrationStartDate)}</p>
                <p><b>Reg. End:</b> {formatDate(registrationEndDate)}</p>
                <p>{description}</p>
                <p className='underline'>{location}</p>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/marathons/${_id}`} className="btn btn-sm text-lg px-8">See mote</Link>
                </div>
            </div>
        </div>
    )
}

export default DataCard
