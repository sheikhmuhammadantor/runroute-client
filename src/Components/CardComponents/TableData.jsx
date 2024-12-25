import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";

function TableData({ marathon, setMarathons, idx, handelDelete, applies = false }) {

    const { _id, title, marathonStartDate, location, runningDistance } = marathon;

    const handelDeleteData = (id) => {
        handelDelete(id)
            .then(() => {
                setMarathons((prev) => prev.filter((item, index) => index !== idx))
            })
            .catch(err => console.log(err))
    }

    return (
        <tr className="border-l-base-content border-l-2 text-center">
            <td className="border border-base-content border-r-2">{idx + 1}</td>
            <td className="border border-base-content border-r-2">{title}</td>
            {
                applies ?
                    <>
                        <td className="border border-base-content border-r-2">{new Date(marathonStartDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                    </> :
                    <>
                        <td className="border border-base-content border-r-2">{location}</td>
                        <td className="border border-base-content border-r-2 hidden lg:table-cell">{runningDistance}</td>
                    </>
            }
            <td className="space-x-2 space-y-2 text-center border border-base-content border-r-2">
                <button className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-teal-400"><MdEdit /></button>
                <button onClick={() => handelDeleteData(_id)} className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-[#f70000]"><ImCross /></button>
            </td>
        </tr>
    )
}

export default TableData
