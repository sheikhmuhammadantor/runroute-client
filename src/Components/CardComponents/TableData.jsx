import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";

function TableData({ marathon, setMarathons, idx }) {

    const { title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image, createdAt, totalRegistrations } = marathon;
    console.log(idx);

    return (
        <tr className="border-l-black border-l-2 text-center">
            <td className="border border-r-black border-r-2">{idx + 1}</td>
            <td className="border border-r-black border-r-2">{title}</td>
            <td className="border border-r-black border-r-2">{location}</td>
            <td className="border border-r-black border-r-2 hidden lg:table-cell">{runningDistance}</td>
            <td className="space-x-2 space-y-2 text-center border border-r-black border-r-2">
                <button className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-teal-400"><MdEdit /></button>
                <button className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-[#f70000]"><ImCross /></button>
            </td>
        </tr>
    )
}

export default TableData
