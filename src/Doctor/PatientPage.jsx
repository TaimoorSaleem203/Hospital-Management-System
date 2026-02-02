import { useState } from 'react'
import PatientsForm from './PatientsForm'
import DoctorPanel from './DoctorPanel'
import DoctorHeader from './DoctorHeader'
import { getLocalStorage } from "../components/addLocalStorage"

const PatientPage = () => {

  const [patientData, setPatientData] = useState(()=>getLocalStorage())

  return (
    <>

      <section className="flex min-h-screen font-poppins bg-[#E5E7EB]">
        <DoctorPanel />
        <main className="flex-1 overflow-y-auto">
          <DoctorHeader />
          <div className={`relative flex lg:flex-col max-w-[1080px] sm:max-w-[1330px] justify-center pb-10 gap-5 px-10 mt-10 w-full ml-auto`}>
            <PatientsForm  patientData={patientData} setPatientData={setPatientData}/>
            {/* <PatientTable /> */}
          </div>          
        </main>
      </section>

    </>
  )
}

export default PatientPage