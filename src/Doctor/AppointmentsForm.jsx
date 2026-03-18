import { useState, useEffect } from "react";
import { setAppointment, getPatient, getAppointment } from "../components/addLocalStorage";
import ModalBar from "../components/ModalBar";
import SearchBar from "../components/SearchBar";

const AppointmentsForm = ({ appoint, setAppoint }) => {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reason, setReason] = useState("");
    const [action, setAction] = useState("");
    const [disabled, setDisabled] = useState(false)
    const [modal, setModal] = useState({
        open: false,
        func: null,
        title: "",
        description: "",
        icon: ""
    })

    useEffect(() => {
        setAppointment(appoint)
    }, [appoint])


    const setID = () => {
        let patients = getPatient()

        let matchedPatient = patients.find((patient) => {
            return fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() == patient.fname && lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase() == patient.lname
        })

        return matchedPatient ? matchedPatient.id : undefined
    }

    const onTimeChange = (time) => {
        var timeSplit = time.split(':'),
            hours,
            minutes,
            meridian;

        var [hours, minutes] = timeSplit

        if (hours > 12) {
            meridian = 'PM';
            hours -= 12;
        } else if (hours < 12) {
            meridian = 'AM';
            if (hours == 0) {
                hours = 12;
            }
        } else {
            meridian = 'PM';
        }

        return (hours + ':' + minutes + ' ' + meridian);
    }

    const validateForm = () => {
        if (!fname || !lname || date == "mm/dd/yyyy" || time == "--:-- --" || !reason || !action) {
            setModal({
                open: true,
                func: null,
                title: "Missing Fields",
                description: "Please fill all required fields before continuing.",
                icon: "ri-error-warning-line text-red-500"
            })
            return
        }
        let id = setID();

        let appointments = getAppointment();
        let appointLst = appointments.map(({ id, date, time }) => ({ id, date, time }));

        if (id == undefined) {
            setModal({
                open: true,
                func: null,
                title: "Patient Not Yet Registered",
                description: "Entered info do not match any records.",
                icon: "ri-error-warning-line text-red-500"
            })
            return
        }

        for (let i = 0; i < appointLst.length; i++) {
            if (id == appointLst[i].id) {
                setModal({
                    open: true,
                    func: null,
                    title: "Duplicate Appointment",
                    description: "Patient already has an appointment registered.",
                    icon: "ri-error-warning-line text-red-500"
                })
                return
            }

            if (date == appointLst[i].date && onTimeChange(time) == appointLst[i].time) {
                setModal({
                    open: true,
                    func: null,
                    title: "Appointment Time Error",
                    description: "Patient already has registered an appointment at this time.",
                    icon: "ri-error-warning-line text-red-500"
                })
                return
            }
        }



        setModal({
            open: true,
            func: AppointmentAdd,
            title: "Appointment Reservation",
            description: "Confirm the registration of patient's appointment.",
            icon: "ri-heart-add-2-line"
        })
    }

    const AppointmentAdd = (e) => {
        e.preventDefault()

        let id = setID();

        setAppoint(prev => [...prev, { "id": id, "fname": fname, "lname": lname, "date": date, "time": onTimeChange(time), "reason": reason, "action": action }])
        setFName(""); setLName(""); setDate(""); setTime(""); setReason(""); setAction("");
        setModal(!modal.open)
    }

    const handleSelectPatient = (patient) => {
        setFName(patient.fname)
        setLName(patient.lname)
    }

    return (
        <div className="min-w-full mx-auto p-8 h-full flex bg-white border shadow-sm rounded-2xl flex-col gap-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-heading">Appointment Form</h2>
                <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Appointments
                </span>
            </div>

            <form className="relative flex flex-col gap-4 w-full">
                <SearchBar onSelectPatient={handleSelectPatient} />
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

                <div className="grid grid-cols-2 gap-4 items-center">
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
                            type="time" value={time} onChange={(e) => setTime(e.target.value)}
                        />
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
                    className="w-full mt-5 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
                    onClick={validateForm}
                >
                    Add Appointment
                </button>
                {modal.open && (
                    <ModalBar
                        isOpen={modal.open}
                        onClose={() => setModal((prev) => ({ ...prev, open: false }))}
                        onConfirm={modal.func}
                        title={modal.title}
                        description={modal.description}
                        icon={modal.icon}
                    />
                )}
            </form>
        </div>
    );
}

export default AppointmentsForm