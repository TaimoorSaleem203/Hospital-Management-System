import PatientTable from "./PatientTable"
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import { getLocalStorage } from "../components/addLocalStorage"
import { useState } from "react"

const PatientsDirectory = () => {
    const [patientData, setPatientData] = useState(()=>getLocalStorage())

    return (
        <>
      <section className="flex overflow-hidden min-h-screen h-full font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="flex-1">
          <DoctorHeader />
          <div className={`flex mt-28 flex-col max-w-[1080px] justify-center pb-10 gap-5 w-full ml-auto`}>
            <PatientTable patientData={patientData} setPatientData={setPatientData}/>
          </div>          
        </main>
      </section>

        </>
    )
}

export default PatientsDirectory