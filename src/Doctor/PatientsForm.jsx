import { useEffect, useState } from "react";
import { setPatient } from "../components/addLocalStorage"
import ModalBar from "../components/ModalBar";
import SearchBar from "../components/SearchBar";

const PatientsForm = ({ patientData, setPatientData }) => {

  const [editingId, setEditingId] = useState(null)
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [blood, setBlood] = useState("");
  const [contact, setContact] = useState("");
  const [action, setAction] = useState("");
  const [active, setActive] = useState("");
  const [formMode, setFormMode] = useState("add");
  const [modal, setModal] = useState({
    open: false,
    func: "",
    title: "",
    description: "",
    icon: ""
  })

  useEffect(() => {
    if (!dob) return
    getAge()
  }, [dob])

  useEffect(() => {
    setPatient(patientData)
  }, [patientData])

  const setID = () => {
    let rawID = JSON.parse(localStorage.getItem("patientData"))?.at(-1)?.id

    if (rawID == undefined) rawID = "P000"

    let seq = parseInt(rawID.replace("P", ""))
    seq++

    let id = "P" + String(seq).padStart(3, "0")
    return id
  }

  const getAge = () => {
    let today = new Date()
    let DOB = dob.split("-").join("")

    let year = Number(DOB.slice(0, 4)); let month = Number(DOB.slice(4, 6)); let day = Number(DOB.slice(6, 8))
    let age = today.getFullYear() - year

    if (today.getMonth() < month || (today.getDay() < day && today.getMonth() === month)) {
      age--
    }

    setAge(age)
  }

  const addPatient = (e) => {
    e.preventDefault()

    setPatientData(prev => [...prev, { "id": setID(), "fname": fname, "lname": lname, "email": email, "dob": dob, "age": age, "gender": gender, "blood": blood, "contact": contact, "action": action, "active": active }])

    setFName(""); setLName(""); setEmail(""); setAge(""); setGender(""); setBlood(""); setContact(""); setAction(""); setActive(""); setDOB("")
    setModal((prev) => ({ ...prev, open: false }))
  }

  const updatePatient = (e) => {
    e.preventDefault()

    setPatientData(prev => prev.map((patient) =>
    (patient.id === editingId ?
      { ...patient, fname, lname, email, dob, age, gender, blood, contact, action, active } : patient
    )))

    setFName(""); setLName(""); setEmail(""); setAge(""); setGender(""); setBlood(""); setContact(""); setAction(""); setActive(""); setDOB("")
    setEditingId(null)
    setModal((prev) => ({ ...prev, open: false }))
  }

  const validateForm = () => {
    if (!fname || !lname || !email || !age || !gender || !blood || !contact || !action || !active || !dob) {
      setModal({
        open: true,
        func: null,
        title: "Missing Fields",
        description: "Please fill all required fields before continuing.",
        icon: "ri-error-warning-line text-red-500"
      })
      return
    }

    if (editingId != null) {
      setModal({
        open: true,
        func: updatePatient,
        title: "Update Patient",
        description: "Confirm updating this patient?",
        icon: "ri-edit-line"
      })

      return
    }

    let dupEmail = patientData.find((patient) => patient.email == email)
    let dupContact = patientData.find((patient) => patient.contact == contact)

    if (dupEmail != undefined) {
      setModal({
        open: true,
        func: null,
        title: "Duplicate Email Found",
        description: "Please fill the required field with another email.",
        icon: "ri-error-warning-line text-red-500"
      })
      return
    } else if (dupContact != undefined) {
      setModal({
        open: true,
        func: null,
        title: "Duplicate Contact Found",
        description: "Please fill the required field with another contact.",
        icon: "ri-error-warning-line text-red-500"
      })
      return
    }

    if (editingId == null) {
      setModal({
        open: true,
        func: addPatient,
        title: "Registration",
        description: "Confirm the registration of this patient",
        icon: "ri-add-line"
      })
    }

  }

  const handleSelectPatient = (patient) => {
    setFName(patient.fname)
    setLName(patient.lname)
    setDOB(patient.dob)
    setEmail(patient.email)
    setAge(patient.age)
    setGender(patient.gender)
    setBlood(patient.blood)
    setContact(patient.contact)
    setAction(patient.action)
    setActive(patient.active)

    setFormMode("edit")
    setEditingId(patient.id)
  }

  

  return (
    <div className="mb-10 mt-[70px] p-8 w-full h-full flex bg-white border shadow-sm rounded-2xl flex-col gap-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-heading">Registration</h2>
        <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          New Patient
        </span>
      </div>

      <form className="flex flex-col gap-3">
        <SearchBar onSelectPatient={handleSelectPatient} />
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
              required
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
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
              DOB
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
              Age
            </label>
            <input
              value={age}
              readOnly
              onChange={(e) => setAge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
              required
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

        <div className="grid grid-cols-3 gap-5 items-center">

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
              <option>Admitted</option>
              <option>Stable</option>
              <option>Recovering</option>
              <option>Critical</option>
              <option>Discharged</option>
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
          className="w-full mt-5 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
          onClick={validateForm}>
          {editingId !== null ? "Update Patient" : "Add Patient"}
        </button>
        {modal.open && (
          <ModalBar
            isOpen={modal.open}
            onClose={(prev) => setModal({ ...prev, open: false })}
            onConfirm={modal.func}
            title={modal.title}
            description={modal.description}
            icon={modal.icon}
          />
        )}

      </form>
    </div>
  );
};

export default PatientsForm;
