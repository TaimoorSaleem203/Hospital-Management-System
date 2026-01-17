import {useState} from 'react'

const AdminDoctorsForm = () => {
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

        <div className="lg:mb-10 mb-0 min-w-full mx-auto p-8 h-full flex bg-white border shadow-sm rounded-2xl flex-col gap-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-heading">Doctor Registration Form</h2>
                <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Doctors
                </span>
            </div>

            <form className="relative space-y-4 w-full">
                {/*<div className="border-b border-slate-200 pb-4">*/}
                {/*    <i className="absolute flex items-center top-[9px] left-3 ri-search-line text-slate-500"></i>*/}
                {/*    <input type="text" placeholder="ID or Patients Name" className="min-w-full w-full pl-10 pr-50 outline-none bg-slate-50 px-4 py-2 border border-slate-200 mx-auto rounded-lg focus:ring-2 focus:ring-blue-500/20" />*/}
                {/*</div>*/}
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

                <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Email
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                            type="text" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Contact
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                            type="number" />
                    </div>
                </div>


                    <div className="w-full">
                        <label className="block flex flex-col gap-1 text-xs font-semibold text-slate-500 uppercase mb-1">
                            Do you have any medical assistant experience?
                           <span className="text-black/30">(please mention your position)</span>
                        </label>
                        <input
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                            type="text" />
                    </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        Please list your education and training:
                    </label>
                    <textarea
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                </div>

                <button
                    type="button"
                    className="w-full mt-10 bg-primary-dark hover:bg-primary text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
                >
                    Add Doctor
                </button>
            </form>
        </div>
    )
}
export default AdminDoctorsForm
