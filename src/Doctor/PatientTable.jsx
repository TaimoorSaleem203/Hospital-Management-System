import { useState, useEffect, useMemo } from "react"
import { setPatient } from "../components/addLocalStorage"
import ModalBar from "../components/ModalBar";

const PatientTable = ({ patientData, setPatientData }) => {

    const [search, setSearch] = useState("")
    const [modal, setModal] = useState({
        open: false,
        func: "",
        title: "",
        description: "",
        icon: ""
    })
    const [selectedIndex, setSelectedIndex] = useState(null)

    useEffect(() => {
        setPatient(patientData)
    }, [patientData])

    const onDelete = (indx) => {
        setPatientData(patientData.filter((item, index) => index !== indx))
        setModal(false);
    }

    const searchPatient = useMemo(() => {
        return patientData.filter((patient) => {
            return patient?.id?.toLowerCase().includes(search.toLowerCase()) || patient?.fname.toLowerCase().includes(search.toLowerCase()) || patient?.lname.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, patientData])


    return (
        <>
            <div className={`w-full overflow-hidden flex flex-col gap-5 px-4 sm:px-6 lg:px-12`}>
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-text-heading">Patient Directory</h2>
                        <p className="text-slate-500">Manage and view records for all registered patients.</p>
                    </div>

                    <span className="text-slate-500 text-md">{patientData.length} Records Found</span>

                </header>

                <div className="bg-white rounded-xl border-2 border-slate-200 shadow-sm">
                    <div className="p-4 border-b border-slate-100">
                        <div className="relative max-w-md">
                            <span className="cursor-pointer absolute inset-y-0 left-3 flex items-center text-slate-400"><i className="ri-search-line text-xl"></i></span>
                            <input
                                type="text"
                                placeholder="Search patients by name or ID..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={search} onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden relative">
                        <table className="w-full max-w-full text-center">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 border-y-2">
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient ID</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Age/Gender</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Blood Type</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Edit</th>
                                    {/* <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Delete</th> */}
                                </tr>
                            </thead>

                            <tbody>


                                {searchPatient.map((patient, index) => {
                                    return (
                                        <tr key={patient.id} className="relative bg-slate-50 border-b border-slate-200 hover:bg-slate-100 border-y-1 cursor-pointer">
                                            <td className='px-6 py-4 font-semibold text-slate-700 uppercase leading-2 tracking-wider'>{patient.id}</td>
                                            <td className='px-6 py-4 font-semibold text-slate-700 leading-2'>{patient.fname} {patient.lname}</td>
                                            <td className='px-6 py-4 font-semibold text-slate-700 leading-2'>{patient.age} / {patient.gender}</td>
                                            <td className='px-6 py-4 font-semibold text-slate-700 leading-2'>{patient.blood}</td>
                                            <td className='px-6 py-4 font-semibold text-slate-700 leading-2'>{patient.contact}</td>
                                            <td className='px-6 py-4 font-semibold text-slate-700 leading-2'>{patient.action}</td>
                                            {patient.active == "Active" ? <td className='px-6 py-4 text-1xl font-semibold text-green-700 leading-2'>Active</td> : <td className='px-6 py-4 text-1xl font-semibold text-red-700 leading-2'>Block</td>}
                                            <td className="px-6 py-6 flex items-center justify-center gap-2">
                                                <td className=' hover:text-cyan-700 font-semibold text-slate-700 leading-2'><i onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    setModal({
                                                        open: true,
                                                        func: null,
                                                        title: "Edit",
                                                        description: "Would you like to edit this record?",
                                                        icon: "ri-edit-fill"
                                                    })
                                                    setSelectedIndex(index)
                                                }} className="ri-edit-fill"></i></td>
                                                <span className="text-slate-700">|</span>
                                                <td className=' hover:text-red-700 font-semibold text-slate-700 leading-2'><i onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    setModal({
                                                        open: true,
                                                        func: null,
                                                        title: "Delete",
                                                        description: "Would you like to delete this record?",
                                                        icon: "ri-delete-bin-fill"
                                                    })
                                                    setSelectedIndex(index)
                                                }} className="ri-delete-bin-fill"></i></td>
                                            </td>
                                        </tr>
                                    )
                                })}
                                {
                                    modal.open && (
                                        <ModalBar
                                            isOpen={modal.open}
                                            onClose={()=>{setModal((prev) => ({ ...prev, open: false }))}}
                                            onConfirm={modal.func}
                                            title={modal.title}
                                            description={modal.description}
                                            icon={modal.icon}
                                        />
                                    )
                                }
                                {patientData.length == 0 && (
                                    <tr>
                                        <td colSpan={10} className='px-6 py-4 text-1xl font-semibold text-slate-700 leading-2'>No Records</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PatientTable