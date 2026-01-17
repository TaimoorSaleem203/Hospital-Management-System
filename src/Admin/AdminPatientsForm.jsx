import React from 'react'
import { useState } from "react";

// import { useForm, useController } from "react-hook-form";

// const emptyForm = {
//   fname: "",
//   lname: "",
//   email: "",
//   age: "",
//   gender: "",
//   blood_group: "",
//   contact: "",
//   action: "",
//   active: ""
// };
const AdminPatientsForm = () => {


    // UI state only (for controlled inputs)
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [blood, setBlood] = useState("");
    const [contact, setContact] = useState("");
    const [action, setAction] = useState("");
    const [active, setActive] = useState("");

    // ❌ Form logic disabled
    // const {
    //   register,
    //   setError,
    //   watch,
    //   formState: { errors, isSubmitting }
    // } = useForm();

    // ❌ Async logic disabled
    // const delay = (d) => {
    //   return new Promise((res) => {
    //     setTimeout(() => res(), d * 1000);
    //   });
    // };

    // const onSubmit = async (data) => {
    //   await delay(2);
    // };

    return (
        <div className="mb-10 w-full p-8 h-full flex bg-white border shadow-sm rounded-2xl flex-col gap-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-heading">Registration</h2>
                <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    New Patient
                </span>
            </div>

            <form className="space-y-4 relative">
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
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                </div>


                <div className="grid grid-cols-3 items-center gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Age
                        </label>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Gender
                        </label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Blood Group
                        </label>
                        <select
                            value={blood}
                            onChange={(e) => setBlood(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        >
                            <option value="">Select</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        Contact
                    </label>
                    <input
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                </div>
                <div className="grid grid-cols-2 gap-5 items-center">

                    <div className="w-full">
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Action
                        </label>
                        <select
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        >
                            <option value="">Select</option>
                            <option>Stable</option>
                            <option>Recovering</option>
                            <option>Critical</option>
                            <option>Emergency</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                            Status
                        </label>
                        <select
                            value={active}
                            onChange={(e) => setActive(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                        >
                            <option value="">Select</option>
                            <option>Active</option>
                            <option>Block</option>
                        </select>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full mt-10 bg-primary-dark hover:bg-primary text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
                >
                    Add Patient
                </button>
            </form>
        </div>
    );
};


export default AdminPatientsForm