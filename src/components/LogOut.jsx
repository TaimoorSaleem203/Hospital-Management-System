import { useState } from "react"
import { Link } from "react-router-dom"
import ModalBar from "./ModalBar"

const LogOut = () => {

    const [modal, setModal] = useState({
        open: false,
        func: <Link to="/"></Link>,
        title: "",
        description: "",
        icon: ""
    })


    return (
        <>
            <button onClick={() => setModal((prev) => ({ ...prev, open: true }))} className={`text-white cursor-pointer flex items-center gap-2 px-10 pt-3 p-2 text-lg absolute bottom-0 right-0 mb-3 border-white/30 border-t w-full mx-auto`} command="show-modal" commandfor="dialog"><i class="ri-logout-box-r-line"></i>Logout</button>
            {modal.open &&
                <ModalBar
                    isOpen={modal.open}
                    onConfirm={modal.func}
                    onClose={() => setModal((prev) => ({ ...prev, open: false }))}
                    title="Log Out"
                    description="Would you like to exit from this portal"
                    icon="ri-logout-circle-r-line"
                />}
        </>
    )
}
export default LogOut