import PatientTable from "./PatientTable"
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import { getLocalStorage } from "../components/addLocalStorage"
import { useState } from "react"

const PatientsDirectory = () => {
    const [patientData, setPatientData] = useState(()=>getLocalStorage())

    return (
        <>
            <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
                <DoctorPanel />
                <main className="flex-1 overflow-y-auto">
                    <DoctorHeader />
                    <div className={`relative flex lg:flex-col max-w-[1080px] sm:max-w-[1330px] justify-center pb-10 gap-5 px-10 mt-10 w-full ml-auto`}>
                        <PatientTable patientData={patientData} setPatientData={setPatientData}/>
                    </div>
                </main>
            </section>

        </>
    )
}

export default PatientsDirectory