import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from '../components/LogOut'

const DoctorPanel = () => {

    const [OpenDrop, setOpenDrop] = useState(null)

    const menuItems = [
        { name: "Dashboard", link: "/doctor/dashboard", icon: "ri-home-4-line" },
        { name: "Patients", link: "/doctor/patients", icon: "ri-user-line", children: [{ title: "Registration Form", path: "/doctor/patients/registration", icon: "ri-user-add-line" }, { title: "Directory", path: "/doctor/patients/directory", icon: "ri-file-list-line" }] },
        { name: "Appointments", link: "/doctor/appointment", icon: "ri-calendar-event-line", children: [{ title: "Appointment Form", path: "/doctor/appointment/form", icon: "ri-user-add-line" }, { title: "Appointment List", path: "/doctor/appointment/list", icon: "ri-file-list-line" }] },
    ]

    return (
        <aside className={`fixed inset-0 z-20 max-w-[1080px] xl:max-w-7xl p-5 font-poppins items-start flex flex-col min-h-screen bg-gradient-to-b to-bg-primary from-[#0FB9B1] to-[#009E9A] lg:w-[280px] xl:w-[300px]`}>
            <h1 className="border-[#d7d9dd] px-3 text-[30px] cursor-pointer text-white font-normal">Medi<span className="font-semibold">Core</span></h1>
            <div className="p-2 mt-10 text-xl w-full mx-auto flex flex-col gap-3">
                {menuItems.map((items) => {
                    return (
                        <>

                            {!items.children ? (
                                <NavLink to={items.link}>
                                    {({ isActive }) => (
                                        <>
                                            <span className={`flex items-center gap-3
                                        cursor-pointer text-center transition duration-300 ease-out w-full mx-auto 
                                        max-w-[350px] rounded-lg p-2 py-3 ${isActive ? "bg-text-heading text-white " : "hover:bg-primary text-white"}`}><i className={`text-xl ${items.icon}`}></i> {items.name}
                                            </span>
                                        </>

                                    )}
                                </NavLink>
                            ) :
                                (
                                    <button onClick={() => setOpenDrop(OpenDrop == items.name ? null : items.name)}
                                        className='flex items-center justify-between w-full p-2 py-3 rounded-lg text-white'>
                                        <span>
                                            <i className={`text-xl ${items.icon} flex items-center gap-2`}>
                                                <span className='font-poppins'>{items.name}</span>
                                            </i>
                                        </span>

                                        <i className={`ri-arrow-down-s-line transition-all duration-150 ease-in-out ${OpenDrop == items.name ? "rotate-180" : ""}`}></i>
                                    </button>
                                )}

                            {items.children && OpenDrop == items.name && (
                                <div className='ml-6 flex flex-col gap-1'>
                                    {items.children.map((child) => (
                                        <NavLink key={child.title} to={child.path}>
                                            {({ isActive }) => (
                                                <>
                                                    <span className={`flex text-base items-center gap-3
                                        cursor-pointer transition-all duration-300 ease-out w-full mx-auto 
                                        rounded-lg p-2 py-3 ${isActive ? "bg-text-heading text-white " : "hover:bg-primary text-[#e9e9e9]"}`}><i className={`text-lg ${child.icon}`}></i> {child.title}
                                                    </span>
                                                </>

                                            )}
                                        </NavLink>
                                    ))}
                                </div>
                            )}

                            <LogOut />
                        </>
                    )
                })}
            </div>

            
        </aside>
    )
}

export default DoctorPanel