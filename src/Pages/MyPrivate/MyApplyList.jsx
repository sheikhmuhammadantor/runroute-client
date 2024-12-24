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
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-base text-black border border-b-black">ID</th>
            <th className="text-center text-base text-black border border-b-black">Title</th>
            <th className="text-center text-base text-black border border-b-black">Start Date</th>
            <th className="text-center text-base text-black border border-b-black">Action</th>
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
