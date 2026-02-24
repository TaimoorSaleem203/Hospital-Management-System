import { useState } from "react"
import { setAppointment } from "../components/addLocalStorage"
import ModalBar from "../components/ModalBar"

const DoctorTable = ({ appoint, setAppoint }) => {

    const [modal, setModal] = useState(false)

    const onDelete = (indx) => {
        setAppoint(appoint.filter((item, index) => indx !== index))
    }
    setAppointment(appoint)

    return (
        <>
            <div className="p-5 px-10 w-full mx-auto min-h-[350px] shadow-lg shadow-text-body/15 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b border-[#d7d9dd] pb-4">
                    <h1 className="border-[rgb(215,217,221)] text-text-heading text-xl font-semibold">My Appointments</h1>
                    <p className="text-primary text-sm cursor-pointer hover:border-b border-primary">View All</p>
                </div>

                <table className="w-full border-collapse">

                    <tbody>
                        {appoint.map((patient, index) => {

                            return (

                                <tr className="border-b text-center border-[#d7d9dd] hover:bg-slate-100 cursor-pointer">
                                    <td className="pt-10"></td>
                                    <td className="font-semibold text-slate-700 leading-tight">{patient.id}</td>
                                    <td className='font-semibold text-slate-700 leading-tight'>{patient.fname} {patient.lname}</td>
                                    <td className='text-md font-medium text-slate-700 leading-tight'><i className="mr-1 ri-calendar-line"></i>{patient.date}</td>
                                    <td className='text-md font-medium text-slate-700 leading-tight'><i className="mr-1 ri-time-line"></i>{patient.time}</td>
                                    <td className='text-md font-medium text-slate-700 leading-tight'>{patient.action}</td>
                                    <td className='text-md font-medium text-primary-dark leading-tight'>Upcoming</td>
                                    {/* {patienst.active == "Active" ? <td className='px-6 py-4 text-1xl font-semibold text-green-700 leading-2'>Active</td> : <td className='px-6 py-4 text-1xl font-semibold text-red-700 leading-2'>Block</td>} */}
                                    <td className='text-md hover:text-red-700 font-semibold text-slate-700 leading-2'><i onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setModal(true)

                                    }} className="ri-delete-bin-fill"></i></td>

                                    {modal && (
                                        <ModalBar
                                            isOpen={modal}
                                            onClose={() => setModal(false)}
                                            onConfirm={() =>{onDelete(index) ; setModal(true)}}
                                            title="Delete"
                                            description="Would you like to delete this record?"
                                            icon="ri-delete-bin-line text-red-700"
                                        />
                                    )}

                                </tr>
                            )

                        })}

                        {appoint.length == 0 &&
                            <tr>
                                <td colSpan={10} className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>No Records</td>
                            </tr>}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DoctorTable