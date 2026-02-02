import { useState } from "react";

const AdminAppointmentForm = () => {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [blood, setBlood] = useState("");
    const [contact, setContact] = useState("");
    const [action, setAction] = useState("");
    const [active, setActive] = useState("");

    
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
                    <input type="text" placeholder="ID or Patients Name" className="min-w-full w-full pl-10 pr-50 outline-none bg-slate-50 px-4 py-2 border border-slate-200 mx-auto rounded-lg focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="grid items-center grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={fname}
                            onChange={(e) => setFName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Last Name
                        </label>
                        <input
                            value={lname}
                            onChange={(e) => setLName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Appointment Date
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                            type="date" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Appointment Time
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                            type="time" />
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
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
                        rows={3}
                        placeholder="Symptoms / purpose" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                </div>

                <button
                    type="button"
                    className="w-full mt-10 bg-primary-dark hover:bg-primary text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
                >
                    Add Appointment
                </button>
            </form>
        </div>
    )
}

export default AdminAppointmentForm