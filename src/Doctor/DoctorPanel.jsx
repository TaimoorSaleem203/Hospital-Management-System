import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const DoctorPanel = () => {

    const [OpenDrop, setOpenDrop] = useState(null)

    const menuItems = [
        { name: "Dashboard", link: "/doctor/dashboard", icon: "ri-home-4-line" },
        { name: "Patients", link: "/doctor/patients", icon: "ri-user-line", children: [{ title: "Patient Registration", path: "/doctors/patients/registration", icon: "ri-user-add-line" }, { title: "Patient Directory", path: "/doctors/patients/directory", icon: "ri-file-list-line" }] },
        { name: "Appointments", link: "/doctor/appointment", icon: "ri-calendar-event-line", children: [{ title: "Appointments Registration", path: "/doctor/appointment/registration", icon: "ri-user-add-line" }, { title: "Appointments Directory", path: "/doctor/appointment/directory", icon: "ri-file-list-line" }] },
    ]

    return (
        <aside className={`fixed left-0 top-0 z-10 max-w-[270px] sm:max-w-[300px] p-5 font-poppins items-start flex flex-col min-h-screen bg-gradient-to-b to-bg-primary from-[#0FB9B1] to-[#009E9A] w-[300px]`}>
            <h1 className="border-[#d7d9dd] px-5 text-[30px] cursor-pointer text-white font-normal">Medi<span className="font-semibold">Core</span></h1>


            <div className="p-2 mt-10 text-lg w-full mx-auto flex flex-col gap-3">
                {menuItems.map((items) => {
                    return (
                        <>

                            {!items.children ? (
                                <NavLink to={items.link}>
                                    {({ isActive }) => (
                                        <>
                                            <span className={`flex items-center gap-3
                                        cursor-pointer text-center transition duration-300 ease-out w-full mx-auto 
                                        max-w-[350px] rounded-lg p-2 py-3 ${isActive ? "bg-text-heading text-white " : "hover:bg-primary text-[#e9e9e9]"}`}><i className={`text-xl ${items.icon}`}></i> {items.name}
                                            </span>
                                        </>

                                    )}
                                </NavLink>
                            ):
                            (
                                <button onClick={()=>setOpenDrop(OpenDrop==items.name? null : items.name)} 
                                className='flex items-center justify-between w-full p-3 rounded-lg text-white'>
                                    <span>
                                        <i className={`text-xl ${items.icon}`}>
                                            {items.name}
                                        </i>
                                    </span>

                                    <i className={`ri-arrow-down-s-line transition-transform ${OpenDrop == items.name? "rotate-180":""}`}></i>
                                </button>
                            )
                            }


                        </>
                    )
                })}
            </div>

            <span className="text-white cursor-pointer flex items-center gap-2 px-10 pt-3 p-2 text-lg absolute bottom-0 right-0 mb-3 border-white/30 border-t w-full mx-auto"><i class="ri-logout-box-r-line"></i>Log Out</span>
        </aside>
    )
}

export default DoctorPanel