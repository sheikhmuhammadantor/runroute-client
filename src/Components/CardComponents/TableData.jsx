import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function TableData({ marathon, setMarathons, idx, handelDelete, applies = false }) {

    const { _id, title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image, createdAt, totalRegistrations } = marathon || {};
    const [modal, setModal] = useState(null);

    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    const handelDeleteData = (id) => {
        handelDelete(id)
            .then(() => {
                setMarathons((prev) => prev.filter((item, index) => index !== idx))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setModal(document?.getElementById('my_modal_1'))
    }, []);

    const handelShowModal = () => {
        modal?.showModal()
    }

    const handelUpdateDate = () => {
        modal?.close()
    }

    return (
        <>
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
                    <button onClick={handelShowModal} className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-teal-400"><MdEdit /></button>
                    <button onClick={() => handelDeleteData(_id)} className="p-2 border rounded-full hover:border-transparent hover:text-white duration-150 hover:bg-[#f70000]"><ImCross /></button>
                    {/* Dialog Box For Modal - */}
                    <>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box max-w-max">
                                <h3 className="font-bold text-lg">{title} - Updating</h3>
                                <h1>hi</h1>
                                <div className="modal-action">
                                    <button onClick={() => handelUpdateDate()} className="btn">Update</button>
                                    <form method="dialog">
                                        <button className="btn mx-4">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </>
                </td>
            </tr>

        </>
    )
}

export default TableData
