import { useEffect, useState } from "react"
import { DataCard, useAxios } from "../../App"
import { Helmet } from "react-helmet"

function AllMarathons() {

  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    axiosInstance.get('/marathons')
      .then((data) => {
        setMarathons(data.data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info w-20"></span></div>
  }

  return (
    <div className="m-8 max-w-[1380px] mx-auto">
      <Helmet>
        <title>RunRoute | All Marathon</title>
      </Helmet>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-16">
        All Marathon's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          marathons?.map((marathon, idx) => <DataCard key={idx} marathon={marathon} />)
        }
      </div>
    </div>
  )
}

export default AllMarathons
