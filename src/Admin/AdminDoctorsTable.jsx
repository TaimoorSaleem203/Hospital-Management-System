
const AdminDoctorsTable = () => {
    return (
        <div className={`w-full flex flex-col gap-5`}>
            <header className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-text-heading">Doctors Directory</h2>
                    <p className="text-slate-500">Manage and view records for all registered doctors.</p>
                </div>

                <span className="text-slate-500 text-md">0 Records Found</span>

            </header>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-4 border-b border-slate-100">
                    <div className="relative max-w-md">
                        <span className="cursor-pointer absolute inset-y-0 left-3 flex items-center text-slate-400"><i className="ri-search-line text-xl"></i></span>
                        <input
                            type="text"
                            placeholder="Search patients by name or ID..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 border-y-2">
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Doctor ID</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Age/Gender</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Blood Type</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Delete</th>
                        </tr>
                        </thead>

                        {/* <tbody>
                                {patients.map((patient, index) => {

                                    return (
                                        <tr key={index} onClick={() => onSelect(index)} className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100 border-y-1 cursor-pointer">
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 uppercase leading-2 tracking-wider'>{`P${String(index + 1).padStart(3, "0")}`}</td>
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>{patient.fname} {patient.lname}</td>
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>{patient.age} / {patient.gender}</td>
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>{patient.blood_group}</td>
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>{patient.contact}</td>
                                            <td className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>{patient.action}</td>
                                            {patient.active == "Active" ? <td className='px-6 py-4 text-1xl font-semibold text-green-700 leading-2'>Active</td> : <td className='px-6 py-4 text-1xl font-semibold text-red-700 leading-2'>Block</td>}
                                            <td className='px-6 py-4 text-1xl hover:text-red-700 font-semibold text-slate-700 leading-2'><i onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                if(confirm(`Would you like to delete this record!`)){
                                                    onDelete(index)
                                                }
                                            }} className="ri-delete-bin-fill"></i></td>
                                        </tr>

                                    )
                                })}

                                {patients.length == 0 && (
                                    <tr>
                                        <td colSpan={10} className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>No Records</td>
                                    </tr>
                                )}
                            </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}
export default AdminDoctorsTable
