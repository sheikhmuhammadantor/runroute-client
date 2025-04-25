import { useEffect, useState } from "react"
import { TableData, useAuth, useAxios } from "../../App";
import { Helmet } from "react-helmet";
import SkeletonList from "../../Components/UI/SkeletonList";

function MyApplyList() {

  const [applies, setApplies] = useState([]);
  const axiosInstance = useAxios();
  const { user: { email } = {} } = useAuth();

  useEffect(() => {
    axiosInstance.get(`/appliesByEmail?email=${email}`)
      .then(res => {
        setApplies(res.data);
      })
      .catch(err => console.log(err.status))
  }, [])

  const handelDeleteApply = (id) => {
    return axiosInstance.delete(`/deleteApply/${id}`)
  }

  const handelSearch = (e) => {
    const searchValue = e.target.value;
    axiosInstance.get(`/apply_search?query=${searchValue}&email=${email}`)
      .then(res => {
        setApplies(res.data);
      }).catch(err => console.log(err.status))
  }

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>RunRoute | All Apply List</title>
      </Helmet>
      <table className="table w-full">
        <caption className="my-6">
          <input onChange={handelSearch} type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
        </caption>
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
          {applies?.length === 0 ?
            <tr >
              <td colSpan={4}>
                <SkeletonList />
              </td>
            </tr>
            :
            applies?.map((marathon, idx) => <TableData key={idx} marathon={marathon} idx={idx} setMarathons={setApplies} handelDelete={handelDeleteApply} applies={true} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyApplyList
