import PatientTable from "./PatientTable"
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import { getPatient } from "../components/addLocalStorage.jsx"
import { useState } from "react"

const PatientsDirectory = () => {
  const [patientData, setPatientData] = useState(getPatient)

  return (
    <>
      <section className="flex overflow-hidden min-h-screen h-full font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="flex-1">
          <DoctorHeader />
          <div className="w-full max-w-[1080px] xl:max-w-7xl ml-auto mt-28 pb-10 gap-5">
            <PatientTable patientData={patientData} setPatientData={setPatientData} />
          </div>
        </main>
      </section>

    </>
  )
}

export default PatientsDirectory