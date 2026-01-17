

const AdminAppointmentTable = () => {
    return (
        <>
            <div className="p-5 px-10 w-full mx-auto min-h-[350px] shadow-lg shadow-text-body/15 rounded-lg bg-white">
                <div className="flex items-center justify-between border-b border-[#d7d9dd] pb-4">
                    <h1 className="border-[rgb(215,217,221)] text-text-heading text-xl font-semibold">My Appointments</h1>
                    <p className="text-primary text-sm cursor-pointer hover:border-b border-primary">View All</p>
                </div>

                <table className="w-full border-collapse">

                    <tbody>
                        {/* {patients.map((patient, index) => { */}


                        <tr className="border-b text-center border-[#d7d9dd] hover:bg-slate-100 cursor-pointer">
                            <td className="pt-10"></td>
                            <td className="font-semibold text-slate-700 leading-tight">1001</td>
                            <td className='font-semibold text-slate-700 leading-tight'>Jason Jack</td>
                            <td className='text-md font-medium text-slate-700 leading-tight'><i className="ri-calendar-line"></i> Jan 09,2026</td>
                            <td className='text-md font-medium text-slate-700 leading-tight'><i className="ri-time-line"></i> 9:00 AM</td>
                            <td className='text-md font-medium text-slate-700 leading-tight'>Emergency</td>
                            <td className='text-md font-medium text-primary-dark leading-tight'>Upcoming</td>
                            {/* {patient.active == "Active" ? <td className='px-6 py-4 text-1xl font-semibold text-green-700 leading-2'>Active</td> : <td className='px-6 py-4 text-1xl font-semibold text-red-700 leading-2'>Block</td>} */}
                            <td className='text-md hover:text-red-700 font-semibold text-slate-700 leading-2'><i onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                // if (confirm(`Would you like to delete this record!`)) {
                                //   onDelete(index)
                                // }
                            }} className="ri-delete-bin-fill"></i></td>
                        </tr>

                        {/* })} */}

                        {/* {patients.length == 0 && ( */}
                        {/* <tr>
                              <td colSpan={10} className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>No Records</td>
                            </tr> */}
                        {/* )} */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminAppointmentTable