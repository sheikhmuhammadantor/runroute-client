import { useEffect, useState } from "react"
import { TableData, useAuth, useAxios } from "../../App";

function MyApplyList() {

  const axiosInstance = useAxios();
  const { user: { email } = {} } = useAuth();
  const [applies, setApplies] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/appliesByEmail?email=${email}`)
      .then(res => setApplies(res.data))
      .catch(err => console.log(err))
  }, [])

  const handelDeleteApply = (id) => {
    return axiosInstance.delete(`/deleteApply/${id}`)
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
      <caption className="text-3xl md:text-5xl my-6">All My Apply's</caption>
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">ID</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Title</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Start Date</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            applies?.map((marathon, idx) => <TableData key={idx} marathon={marathon} idx={idx} setMarathons={setApplies} handelDelete={handelDeleteApply} applies={true} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyApplyList
