import { useEffect, useState } from "react"
import { TableData, useAuth, useAxios } from "../../App";
import { Helmet } from "react-helmet";
import SkeletonList from "../../Components/UI/SkeletonList";

function MyMarathonsList() {

  const axiosInstance = useAxios();
  const { user: { email } = {} } = useAuth();
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/marathonByEmail?email=${email}`)
      .then(res => {
        setMarathons(res.data);
      })
      .catch(err => console.log(err.status))
  }, [])

  const handelDeleteMarathon = (id) => {
    return axiosInstance.delete(`/deleteMarathon/${id}`)
  }

  const handelSortClick = () => {
    axiosInstance.get(`/marathonByEmail/sort?email=${email}`)
      .then((res) => {
        setMarathons([...res.data]);
      })
  }

  return (
    <div className="overflow-x-auto">
      <div className="text-right mr-6">
        <button onClick={handelSortClick} className="btn btn-accent text-white text-lg px-8">Sort</button>
      </div>
      <Helmet>
        <title>RunRoute | My Marathons</title>
      </Helmet>
      <table className="table w-full">
        <caption className="text-3xl md:text-5xl my-6">All My Marathon's</caption>
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">ID</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Title</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Location</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2 hidden lg:table-cell">Distance</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {marathons?.length === 0 ?
            <tr >
              <td colSpan={5}>
                <SkeletonList />
              </td>
            </tr>
            :
            marathons?.map((marathon, idx) => <TableData key={idx} marathon={marathon} idx={idx} setMarathons={setMarathons} handelDelete={handelDeleteMarathon} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyMarathonsList
