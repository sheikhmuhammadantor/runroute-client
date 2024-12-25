import { useEffect } from "react";

function UpdateModal({handelUpdate, handelModalOpen, updateIt}) {

    const openModal = handelModalOpen();

    useEffect(() => {
        const Modal = openModal(my_modal_1)
    }, []);

    return (
        <section>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={() => handelUpdate()} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    )
}

export default UpdateModal
