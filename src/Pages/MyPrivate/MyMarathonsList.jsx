import { useEffect, useState } from "react"
import { TableData, useAuth, useAxios } from "../../App";

function MyMarathonsList() {

  const axiosInstance = useAxios();
  const { user: { email } = {} } = useAuth();
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/marathonByEmail/?email=${email}`)
      .then(res => setMarathons(res.data))
      .catch(err => console.log(err))
  }, [])

  const handelDeleteMarathon = (id) => {
    return axiosInstance.delete(`/deleteMarathon/${id}`)
  }

  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-base text-black border border-b-black">ID</th>
            <th className="text-center text-base text-black border border-b-black">Title</th>
            <th className="text-center text-base text-black border border-b-black">Location</th>
            <th className="text-center text-base text-black border border-b-black hidden lg:table-cell">Distance</th>
            <th className="text-center text-base text-black border border-b-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            marathons?.map((marathon, idx) => <TableData key={idx} marathon={marathon} idx={idx} setMarathons={setMarathons} handelDelete={handelDeleteMarathon} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyMarathonsList
