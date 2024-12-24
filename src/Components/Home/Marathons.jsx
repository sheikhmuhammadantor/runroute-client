import { useEffect, useState } from "react"
import { DataCard, useAxios } from "../../App"

function Marathons() {

  const axiosInstance = useAxios()
  const [marathons, setMarathons] = useState([])
  // console.log(marathons);

  useEffect(() => {
    axiosInstance.get('/marathons?isRunning=true')
      .then((data) => {
        setMarathons(data.data)
      })
  }, [])

  return (
    <div className="m-8">
      <h1 className="text-5xl font-semibold text-center mb-16">
        Running Marathon's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          marathons?.map((marathon, idx) => {
            return <DataCard key={idx} marathon={marathon} />
          })
        }
      </div>
    </div>
  )
}

export default Marathons
