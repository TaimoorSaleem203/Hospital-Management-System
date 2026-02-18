import { useState } from "react";
import { setAppointment, getLocalStorage, getAppointment } from "../components/addLocalStorage";

const AppointmentsForm = ({ appoint, setAppoint }) => {
    
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reason, setReason] = useState("");
    const [action, setAction] = useState("");
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [disabled, setDisabled] = useState(false)

    const setID = () => {
        let patients = getLocalStorage()

        let matchedPatient = patients.find((patient) => {
            return fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() == patient.fname && lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase() == patient.lname
        })

        return matchedPatient?.id ?? null
    }

    const searchData = (value) => {
        let patients = getLocalStorage()
        setSearch(value)
        let result = patients.filter((patient) => patient.fname.toLowerCase().includes(value) || patient.lname.toLowerCase().includes(value) || patient.id.toLowerCase().includes(value))

        setResult(result)
    }

    const fetchData = () => {
        result.map((patient) => {
            setFName(patient.fname)
            setLName(patient.lname)
        })

        setDisabled(true)
        setSearch("")
    }


    const AppointmentAdd = () => {

        if (!fname || !lname || !date || !time || !reason || !action) {
            return
        }
        let appointments = getAppointment()

        let id = setID()
        let allID = appointments.map((item)=>{return item.id})

        for(let i=0 ; i<allID.length ; i++){
            if(id == allID[i]){
                alert("Patient's Appointment already registered. One appointment at a time!")
                return
            }
        }

        if (!id) {
            alert("Patient not found. Please register patient first.")
            return
        }

        setAppoint(prev => [...prev, { "id": id, "fname": fname, "lname": lname, "date": date, "time": time, "reason": reason, "action": action }])
        setFName(""); setLName(""); setDate(""); setTime(""); setReason(""); setAction("")
    }
    setAppointment(appoint)


    return (
        <div className="min-w-full mx-auto p-8 h-full flex bg-white border shadow-sm rounded-2xl flex-col gap-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-heading">Appointment Form</h2>
                <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Appointments
                </span>
            </div>

            <form className="relative space-y-4 w-full">
                <div className="border-b border-slate-200 pb-4">
                    <i className="absolute flex items-center top-[9px] left-3 ri-search-line text-slate-500"></i>
                    <input value={search} onChange={(e) => searchData(e.target.value)} type="text" placeholder="ID or Patients Name" className="min-w-full w-full pl-10 pr-50 outline-none bg-slate-50 px-4 py-2 border border-slate-200 mx-auto rounded-lg focus:ring-2 focus:ring-blue-500/20" />
                    <span className={`${search.length == 0 && "hidden"} transition-all delay-150 duration-300 ease-in-out absolute p-3 flex flex-col gap-2 shadow-md min-w-full overflow-y-auto max-h-[300px] top-[50px] rounded-sm left-0 -z-1 bg-white`}>
                        {search.length > 0 && result.map((item) => {
                            return (
                                <p onClick={() => { fetchData() }} className="w-full transition-all duration-150 p-3 rounded-lg cursor-pointer hover:bg-slate-100">{item.id}: {item.fname} {item.lname}</p>
                            )
                        })}
                    </span>
                </div>
                <div className="grid items-center grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={fname}
                            disabled={disabled}
                            onChange={(e) => setFName(e.target.value)}
                            className={`w-full  ${disabled && "bg-slate-100"} bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none `}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Last Name
                        </label>
                        <input
                            value={lname}
                            disabled={disabled}
                            onChange={(e) => setLName(e.target.value)}
                            className={`w-full ${disabled && "bg-slate-100"} bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Appointment Date
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none"
                            value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Appointment Time
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none"
                            type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                </div>


                <div className="flex gap-5">
                    <div className="w-full">
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Appointment Type
                        </label>
                        <select
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none"
                        >
                            <option value="">Select</option>
                            <option>New Consultation</option>
                            <option>Follow-up</option>
                            <option>Emergency</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        Reason for Visit
                    </label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows={3}
                        placeholder="Symptoms / purpose" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500/20 outline-none"
                    />
                </div>

                <button
                    type="button"
                    className="w-full mt-10 bg-primary-dark hover:bg-primary text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
                    onClick={() => (confirm(`Would you like to confirm the appointment of ${fname} ${lname}?`) && AppointmentAdd())}
                >
                    Add Appointment
                </button>
            </form>
        </div>
    );
}

export default AppointmentsForm